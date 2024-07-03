package com.freelancer.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.freelancer.model.CV;
import com.freelancer.model.Review;
 
public interface ReviewRepo  extends JpaRepository<Review, Long> {

	List<Review> findByCv(CV cv);
	@Query("SELECT AVG(r.start) FROM Review r WHERE r.cv.id = :cvId")
    Double findAverageRatingByCvId(Long cvId);
	boolean existsByCvAndStart(CV cv, double start);
}
