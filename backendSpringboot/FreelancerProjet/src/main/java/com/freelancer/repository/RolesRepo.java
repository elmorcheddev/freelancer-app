package com.freelancer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.freelancer.model.Roles;

public interface RolesRepo extends JpaRepository<Roles, Long>{
	Roles findByNomRole(String nomRole);
}
