package com.foodbox.shubhamspringbootproject.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.foodbox.shubhamspringbootproject.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long>{

}
