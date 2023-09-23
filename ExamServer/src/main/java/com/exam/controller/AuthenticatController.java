package com.exam.controller;

import java.security.Principal;
import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.config.JwtUtils;
import com.exam.entity.JwtRequest;
import com.exam.entity.JwtResponse;
import com.exam.entity.Role;
import com.exam.entity.User;
import com.exam.entity.UserRole;
import com.exam.service.UserService;
import com.exam.service.impl.UserDetaileServiceImpl;


@RestController
@RequestMapping("/api/v1/auth")
@CrossOrigin("*")
public class AuthenticatController {

	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserDetaileServiceImpl userDetaileService;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Autowired
	private UserService us;
	
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	//generate Token
	@PostMapping("/login")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
        
		try {
	        System.out.println(jwtRequest.getPassword()+" 122");
			authenticate(jwtRequest.getUserName(), jwtRequest.getPassword());
		}catch(UsernameNotFoundException e) {
		    e.printStackTrace();
		    throw new Exception("User not Found"); 
		    
		}
		

		///authenticate 
		 
		
		UserDetails userDetails = this.userDetaileService.loadUserByUsername(jwtRequest.getUserName());
		String token = this.jwtUtils.generateToken(userDetails);
		
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	@PostMapping("/signup")
	public ResponseEntity<User> signUp(@RequestBody User user) throws Exception
	{
		Set<UserRole> userRoles = new HashSet<>();
		Role role = new Role();
		role.setRoleId(45L);
		role.setRoleName("NORMAL");
		
		UserRole userRole = new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);
		userRoles.add(userRole);
		String encpwd = passwordEncoder.encode(user.getPassword());
		user.setPassword(encpwd);
		
		User response = this.us.createuser(user, userRoles);
		return new ResponseEntity<User>(response,HttpStatus.OK);
	}
	
	
	private void authenticate(String username,String password) throws Exception {
		
		try {
		
			
			 authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		}catch (DisabledException e) {
			// TODO: handle exception
			throw new Exception("User Disabled");
		}catch(BadCredentialsException e) {
			throw new Exception("Invalid credentials  " + e.getMessage()); 
		}
		
		
		
	}
	// return the detail of current user 
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		User us =(User)this.userDetaileService.loadUserByUsername(principal.getName());
		System.out.println(us.isEnabled()?us:null+"  currentUser");
		return us.isEnabled()?us:null;
	}
	
	
	}
	








