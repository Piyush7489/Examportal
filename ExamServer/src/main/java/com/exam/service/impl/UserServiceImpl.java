package com.exam.service.impl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.exam.entity.User;
import com.exam.entity.UserRole;
import com.exam.repo.RoleRepo;
import com.exam.repo.UserRepo;
import com.exam.service.UserService;
import com.portal.app.helper.UserFoundException;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepo userRepo;

	@Autowired
	private RoleRepo roleRepo;
	
	
	//creating user
	@Override
	public User createuser(User user, Set<UserRole> userRoles) throws Exception{
		User local=this.userRepo.findByUsername(user.getUsername());
		if(local!=null)
		{
			System.out.println("user is already there !!");
			throw new UserFoundException("user already present !!");
			
		}
		else {
			
			for(UserRole ur:userRoles)
			{
				roleRepo.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local=this.userRepo.save(user);
			
		}
		return local;
	}


	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepo.findByUsername(username);
	}


	@Override
	public String deleteuser(Long userId) {
		// TODO Auto-generated method stub
		if(userRepo.existsById(userId))
		{
			this.userRepo.deleteById(userId);
			return "delete";
		}
		else {
			return "user already deleted exist";
		}
		
	}


	@Override
	public String updateUser(User user, String userName) {
		User oldUser =  userRepo.findByUsername(userName);
		
		if(oldUser.getUsername().equals(userName))
		{
			userRepo.save(user);
			
			System.out.println("updated");
			return "updated";
		}

		return "not updated";
		
	}
	
	

}
