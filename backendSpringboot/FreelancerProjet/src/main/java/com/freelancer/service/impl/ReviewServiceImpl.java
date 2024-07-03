package com.freelancer.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.freelancer.model.CV;
import com.freelancer.model.Review;
import com.freelancer.model.Utilisateurs;
import com.freelancer.repository.CvRepo;
import com.freelancer.repository.ReviewRepo;
import com.freelancer.repository.UtilisateursRepo;
import com.freelancer.service.ReviewService;
 
@Service
public class ReviewServiceImpl implements ReviewService {

	@Autowired
	private ReviewRepo reviewRepo;
	@Autowired
	private UtilisateursRepo utilisateurRepo;
	
	@Autowired
	private CvRepo cvRepo;
	
	@Override
	public List<Review> findByCv(CV cv) {
 		return reviewRepo.findByCv(cv);
	}

	@Override
	public Review findReviewById(Long id) {
		// TODO Auto-generated method stub
		return reviewRepo.findById(id).get();
	}

	@Override
	public void deleteReview(Long id) {
		// TODO Auto-generated method stub
		reviewRepo.deleteById(id);
	}

	@Override
	public Review addNewReview(Review review, Long userId, Long idcv) {
		Utilisateurs client=utilisateurRepo.findById(userId).get();
		CV cv =cvRepo.findById(idcv).get();

		boolean exist=reviewRepo.existsByCvAndStart(cv, review.getStart());
		if(!exist) {
			review.setClient(client);
		review.setCv(cv);
		review.setContent(review.getContent());
		review.setStart(review.getStart());
		review.setDateCreation(new Date());
		
		return reviewRepo.save(review);
		}else {
			return null;
		}
		
	}
	@Override
	 public Double getAverageRating(Long competanceId) {
	        return reviewRepo.findAverageRatingByCvId(competanceId);
	    }
}
