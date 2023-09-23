package com.exam.controller;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.entity.User;
import com.exam.entity.UserRole;
import com.exam.service.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserControler {

	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public  User createUser(@RequestBody User user)
	{
		Set<UserRole> roles=new HashSet<>();
		System.out.println("this is create user");
		
		com.exam.entity.Role role =new com.exam.entity.Role();
		role.setRoleId(11L);
		role.setRoleName("NORMAL");
		
		UserRole userRole =new UserRole();
		userRole.setUser(user);
		userRole.setRole(role);
		roles.add(userRole);
		try {
			return this.userService.createuser(user, roles);
		} catch (Exception e) {

			e.printStackTrace();
			System.out.println("return at user Controler");
			return null;
		}
		
	}
	
	// get user by username
	@GetMapping("/get/{username}")
	public User getUser(@PathVariable("username") String username)
	{
		return this.userService.getUser(username);
		
	}
	
	@DeleteMapping("/delete/{userId}")
	public  String deleteUser(@PathVariable("userId") Long userId)
	{
		
		return this.userService.deleteuser(userId);
		
	}
	
	@PutMapping("/update/{username}")
	public String updateuser(@RequestBody User user,@PathVariable String username)
	{
		return this.userService.updateUser(user, username);		
	}	
}