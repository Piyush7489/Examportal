package com.exam.service;

import java.util.Set;

import com.exam.entity.User;
import com.exam.entity.UserRole;

public interface UserService {

	
	public User createuser(User user ,Set<UserRole> userRoles) throws Exception;

	public User getUser(String username);
	
	public String deleteuser(Long userId);
	
	public String updateUser(User user, String userName);
}
