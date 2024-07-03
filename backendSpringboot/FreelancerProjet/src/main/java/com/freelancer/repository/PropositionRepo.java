package com.freelancer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.freelancer.model.CV;
import com.freelancer.model.Project;
import com.freelancer.model.Proposition;
import com.freelancer.model.Utilisateurs;

public interface PropositionRepo extends JpaRepository<Proposition, Long> {
List<Proposition> findByCv(CV CV);
List<Proposition> findByCvAndEnattentIsTrue(CV cv);
 List<Proposition> findByCvAndRefuserIsTrue(CV cv);
List<Proposition> findByCvAndRefuserIsTrueOrAccepterIsTrueOrEnattentIsTrue(CV cv);
List<Proposition> findByClientAndAccepterIsTrue(Utilisateurs client); 
List<Proposition> findByClient(Utilisateurs client);
List<Proposition> findByProject(Project project);
boolean existsByCvAndProject(CV cv, Project project);
List<Proposition> findByCvAndAccepterIsTrue(CV cv); 
List<Proposition> findByAccepterIsTrue();
}
