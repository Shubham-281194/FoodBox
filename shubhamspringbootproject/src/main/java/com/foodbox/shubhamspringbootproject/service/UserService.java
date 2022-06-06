package com.foodbox.shubhamspringbootproject.service;

import java.util.Set;

import com.foodbox.shubhamspringbootproject.model.User;
import com.foodbox.shubhamspringbootproject.model.UserRole;

public interface UserService {
	
	//add user
	public User createUser(User user,Set<UserRole> userRoles) throws Exception;
	//get user by user name
	public User getUser(String username);
	//delete user by id
	public void deleteUser(Long userId);
	
	

}
