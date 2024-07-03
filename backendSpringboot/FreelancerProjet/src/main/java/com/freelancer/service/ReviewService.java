package com.freelancer.service;

import java.util.List;

import com.freelancer.model.CV;
import com.freelancer.model.Review;

 
public interface ReviewService {
	List<Review> findByCv(CV cv);
 	Review findReviewById(Long id);
	 void deleteReview(Long id);
  	Review addNewReview(Review review, Long userId, Long idcomptance);
	Double getAverageRating(Long competanceId);

}
