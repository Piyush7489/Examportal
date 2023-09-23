package com.exam;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;

@SpringBootApplication
public class ExamServerApplication implements CommandLineRunner{

//	@Autowired
//	private UserService userservice;
	
	public static void main(String[] args) {
		SpringApplication.run(ExamServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		System.out.println("starting apk");
//		
//		User  user=new User();
//		
//		user.setFirstName("akul");
//		user.setLastName("gehlot");
//		user.setUsername("akul09");
//		user.setPassword("Akul@123");
//		user.setEmail("akul@gmail.com");
//		user.setProfile("akul.png");
//	
//		Role role1=new Role();
//		role1.setRoleId(11L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet =new HashSet<>();
//		UserRole userRole=new UserRole();
//		
//		userRole.setRole(role1);
//		userRole.setUser(user);
//	    
//		userRoleSet.add(userRole);
//		
//		User user1 =this.userservice.createuser(user, userRoleSet);                         
//		System.out.println(user1.getUsername());
//	
	
		
	}

}
