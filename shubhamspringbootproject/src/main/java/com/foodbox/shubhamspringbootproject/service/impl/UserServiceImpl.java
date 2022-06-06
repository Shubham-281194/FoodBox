package com.foodbox.shubhamspringbootproject.service.impl;

import java.util.Set;

import org.hibernate.internal.ExceptionConverterImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.shubhamspringbootproject.model.User;
import com.foodbox.shubhamspringbootproject.model.UserRole;
import com.foodbox.shubhamspringbootproject.repo.RoleRepository;
import com.foodbox.shubhamspringbootproject.repo.UserRepository;
import com.foodbox.shubhamspringbootproject.service.UserService;
@Service
public class UserServiceImpl implements UserService
{

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	// creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception{
		// TODO Auto-generated method stub
		User local=this.userRepository.findByUsername(user.getUsername());
		if(local!=null)
		{
			//not creat user
			System.out.println("you are already foodbox user!!");
			
			throw new Exception("User already have Present");
		}
		else {
			// create user
			for(UserRole uRole:userRoles)
			{
				roleRepository.save(uRole.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local=this.userRepository.save(user);
		}
		return local;
	}
	//geting user by user name

	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		User pass=this.userRepository.findByUsername(username);
		return pass;
	}

	@Override
	public void deleteUser(Long userId) {
		// TODO Auto-generated method stub
		this.userRepository.deleteById(userId);
		
	}
	
	
}
