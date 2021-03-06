var questionId = 0; 

var leaseVsBuy = {
	'totalScore': 0,
	'0': {
		'question': 'I expect to hold on to this car:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'Four years or less.',
				'description': 'You are likely to complete your lease and (1) avoid the activities of negotiating the trade-in value when you get a new vehicle because of the guaranteed trade-in value; (2) pay less sales tax than if you had purchased the vehicle; and (3) avoid unexpected depreciation at the end of your contract term. The more frequently you trade vehicles, the more often you get these benefits. It is also important to recognize that your vehicle is likely to stay in warranty all or most of the lease term if you lease the vehicle for four years or less.',
				'score': 3
			},
			'1': {
				'answer': 'Five years.',
				'description': 'You can get a five-year lease term, but there\'s more time for you to change your mind about keeping the vehicle the full five years and you probably will have an early termination charge if you end your lease early. Also, your vehicle is likely to exceed the warranty so leasing won\'t provide you "full fixed price transportation" as it will for shorter terms. Your sales tax savings are also less than on shorter terms.',
				'score': 2
			},
			'2': {
				'answer': 'Six years or longer.',
				'description': 'If you keep your vehicle longer than the 60 to 66-month maximum lease term, you won\'t get the benefits of the guaranteed trade-in value at lease end. You\'ll also have to get financing to buy the vehicle at lease end. On the other hand, you still get the benefits of lower lease payments, not tying up cash in your vehicle and the flexibility to change your mind at the end of the lease if you want to return the vehicle at that point.',
				'score': 1
			}
		}
	},
	'1': {
		'question': 'The condition in which I keep my car is:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'Good, I expect to get a few parking dents and minor scratches. ',
				'description': 'You probably won\'t have any excess wear and tear charge if you return the vehicle or you may be able to trade it without a charge for your next vehicle.',
				'score': 3
			},
			'1': {
				'answer': 'Fair, it will have some scratches, interior stains, and minor dents. ',
				'description': 'You probably will have an excess wear and tear charge if you return the vehicle, and it will probably be worth less than the lease payoff if you want to trade and end your lease early.',
				'score': 2
			},
			'2': {
				'answer': 'Poor, it will probably be in rough condition. ',
				'description': 'You are very likely to have a large excess wear and tear charge and it will probably cost a lot to trade out early on your lease. In order to avoid the excess wear and tear charge, you\'ll have to purchase the vehicle and keep making payments. Of course, if you owned the vehicle, it would also be worth less than a well-maintained vehicle but at least you will eventually be able to trade if you keep making your monthly loan payments.',
				'score': 1
			}
		}
	},
	'2': {
		'question': 'I change the oil and maintain my vehicle:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'As recommended by the manufacturer. ',
				'description': 'Following the manufacturer\'s maintenance recommendations will keep you from voiding your warranty and from any liability for excess wear and tear charges for not maintaining your vehicle.',
				'score': 3
			},
			'1': {
				'answer': 'Well enough to keep my cars in good condition. ',
				'description': 'You could be responsible at the end of the lease for any manufacturer-required maintenance you\'ve skipped and for an excess wear and tear charge if you damaged the vehicle. ',
				'score': 2
			},
			'2': {
				'answer': 'Only when I really have to.',
				'description': 'If you want to return the vehicle at the end of the lease, you\'ll probably owe substantial excess wear and tear charges if the vehicle isn\'t in good working condition. If you finance instead of lease, the vehicle will also be worth less but at least you won\'t have to pay cash for the vehicle damage. Of course, you can always exercise your purchase option in your lease to avoid paying excess wear charges.',
				'score': 0
			}
		}
	},
	'3': {
		'question': 'Each year, I typically drive my car:',
		'selection': null,
		'answers': {
			'0': {
				'answer': '12,000 to 15,000 miles or less. ',
				'description': 'Most leases are for 12,000 or 15,000 miles per year therefore you can easily get a mileage allowance that fits your driving pattern so you won\'t owe any excess mileage charge if you return the vehicle at lease end.',
				'score': 3
			},
			'1': {
				'answer': '15,000 to 20,000 miles. ',
				'description': 'You can request more than 15,000 miles a year in your lease, which will then increase your monthly payment somewhat but will keep you from paying an excess mileage charge if you return the vehicle at lease end. However, it may be hard to project exactly how many extra miles to buy and many leasing companies don\'t reimburse any amount you paid for miles over 15,000 a year if you don\'t use them all. On the other hand, you can always purchase the vehicle at the end of the lease to avoid the mileage charges and you still have received the leasing benefits of lower monthly payments, gap coverage, etc.',
				'score': 2
			},
			'2': {
				'answer': 'Over 20,000 miles (i.e., daily commute of 60+ miles + other driving). ',
				'description': 'While you can request a lease for 25,000 or even 30,000 miles a year from most lessors, there won\'t be much savings in your monthly payment compared to financing the vehicle because your residual value will be reduced and the term can\'t be longer than 36 to 48 months. It\'s harder to predict your actual mileage if you drive a lot of miles and if you guess too low, you\'ll owe an excess mileage charge at the end of the lease if you return the vehicle. On the other hand, many people who use their vehicle in their work and drive 25,000 to 30,000 miles a year use leasing as a way to have fixed cost transportation with a low monthly payment and get a new vehicle every two or three years.',
				'score': 1
			}
		}
	},
	'4': {
		'question': 'To get this car prefer to put down:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'Nothing at all. ',
				'description': 'Most leases allow you to pay only your first monthly payment with no down payment or even a security deposit, while most financing requires more upfront payments. Leasing is designed for individuals who want to conserve their cash for more important alternatives.',
				'score': 3
			},
			'1': {
				'answer': 'Some money, but less than 20 percent. ',
				'description': 'You don\'t get all of the "cash conservation" benefits of leasing if you make this much down payment but you can substantially reduce your monthly payments and still get all of the other benefits of leasing.',
				'score': 2
			},
			'2': {
				'answer': '20 percent or more of the purchase price. ',
				'description': 'Most lessors limit the amount of down payment you can make to 20 percent or less of the vehicle value (unless you choose a single payment lease). You don\'t get all of the "cash conservation" benefits of leasing if you make this much down payment but you can substantially reduce your monthly payments and still get the other protections of leasing.',
				'score': 1
			}
		}
	},
	'5': {
		'question': 'I can use the savings in my monthly payment and lower initial payment from leasing to:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'Pay down my credit card debt, put into my company or personal retirement plan, put into my child\'s college fund or accumulate 6 months of living expenses in a savings or brokerage account. ',
				'description': 'The cash conservation benefits of leasing (low initial payment and low monthly payments) provide the most financial benefit if you use the cash savings to pay off a high cost debt or to make an investment with a high return. Leasing is also a way to accumulate the cash needed for six months of living expenses that financial planners recommend for emergencies.',
				'score': 5
			},
			'1': {
				'answer': 'Save for a future financial goal such as purchasing a new home or making a home addition. ',
				'description': 'Leasing provides a good way to conserve cash for another financial goal. However, it doesn\'t have the same direct financial benefit as paying off a high cost credit card debt or making an investment with a high return.',
				'score': 3
			},
			'2': {
				'answer': 'I am not a "saver," I will spend the savings each month.',
				'description': 'Leasing allows you to drive a new vehicle without ever developing any equity. But for people who have a tendency to live beyond their means, it can contribute to developing a high debt load, particularly if you run up excess mileage, excess wear, or early termination charges.',
				'score': 1
			}
		}
	},
	'6': {
		'question': 'An end-of-term "walk-away provision" is:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'Important since it protects me against declines in the used car market. ',
				'description': 'If you like having insurance against other financial risks in your life and you plan to keep the vehicle until the end of the lease (unless you develop equity), you can often save thousands of dollars by returning the vehicle at lease end.',
				'score': 5
			},
			'1': {
				'answer': 'Not very important since I plan to keep my vehicle more than five years so if I leased, I\'d purchase it at lease end. ',
				'description': 'A guaranteed trade-in value isn\'t worth much if you actually keep the vehicle until the wheels fall off (i.e., 10 years or more). The guaranteed value of leasing doesn\'t benefit you if you purchase the vehicle for the full purchase option price at lease end. However, if you change your mind and return the vehicle, or if the lessor offers to sell it to you at lease end for less than the residual value or with special low rate financing, then you\'ll still get the benefit of the guaranteed value.',
				'score': 3
			},
			'2': {
				'answer': 'Not important. I don\'t mind negotiating the trade-in value when I\'m ready to trade. ',
				'description': 'If you don\'t believe in life insurance or any other kind of insurance, then the guaranteed value of leasing probably doesn\'t have much appeal to you either. And if you never trade the vehicle, you wouldn\'t ever use a guaranteed trade-in value.',
				'score': 1
			}
		}
	},
	'7': {
		'question': 'I would like being able to return the vehicle without negotiating the trade-in value:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'A lot since I don\'t want to spend the time or energy to try to negotiate the best trade-in price. ',
				'description': 'Busy people or those who don\'t enjoy the negotiation process in dealerships enjoy getting the residual value as a "pre-set trade-in value."',
				'score': 3
			},
			'1': {
				'answer': 'Some, but I don\'t mind doing my homework and going to several dealers to work the best trade-in deal. ',
				'description': 'Some people see negotiating their trade-in value as a "necessary evil" and once they start the process find they even enjoy the negotiation process.',
				'score': 2
			},
			'2': {
				'answer': 'Not at all, I don\'t mind negotiating the trade-in value with the dealer sales staff. ',
				'description': 'Some people enjoy the whole process of negotiating the best deal and using every resource at their command to get what they want.',
				'score': 1
			}
		}
	},
	'8': {
		'question': 'I\'m a good candidate for a finance option where I don\'t build equity in the vehicle:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'I\'m financially disciplined and don\'t overspend or live beyond my means. ',
				'description': 'Leasing, like using a home equity line of credit or buying stocks on margin, is a very useful and powerful financial tool used by many high-wealth individuals and other sophisticated consumers. One of its benefits is that it is not a "forced savings account" like financing where you build equity in the vehicle. For people who don\'t have financial discipline, leasing has the same risks as home equity lines and margin purchases. Each can facilitate overspending and running up a high debt load.',
				'score': 5
			},
			'1': {
				'answer': 'I like getting the best products I can afford, and I\'m willing to adjust the rest of my budget to pay for my obligations. ',
				'description': 'Leasing enables you to drive a more expensive vehicle or one that fits your needs better than the one you can afford to finance. However, since leasing isn\'t designed to build equity in the vehicle, if you decide to terminate early or you drive a lot more miles than you purchased in the lease, you are likely to end up with a significant deficiency.',
				'score': 3
			},
			'2': {
				'answer': 'I like nice things and I figure "since you only go around once, get the best" regardless of whether I can afford it.',
				'description': 'Leasing can be financially risky if you are living with a high debt load and using leasing to get a vehicle you can\'t otherwise afford. If you decide to terminate early (or need to because your income declines or you lose your job), or if you run up a lot of excess mileage, your leasing termination deficiency would add even more to your debts. Financing your vehicle in order to build equity in it may be a good strategy for people who tend to spend more than they can afford.',
				'score': -1
			}
		}
	},
	'9': {
		'question': 'With respect to my vehicle insurance:',
		'selection': null,
		'answers': {
			'0': {
				'answer': 'I believe in protecting myself with good insurance coverage and I would never let my auto insurance lapse. ',
				'description': 'Leasing companies require strict adherence to the insurance requirements because they can be liable for accidents you cause.',
				'score': 3
			},
			'1': {
				'answer': 'I\'m willing to pay for any extra insurance coverage to get the car I want. ',
				'description': 'Most people interested in leasing already have "100/300" coverage so they don\'t have the expense of "extra insurance coverage." Getting a more expensive vehicle will increase your insurance costs even before adding the cost of higher insurance coverage or lower deductibles so you need to be sure that the costs of both the lease and your new vehicle insurance fit into your budget.',
				'score': 2
			},
			'2': {
				'answer': 'I don\'t want to pay for any extra insurance coverage just to get a better car.',
				'description': 'If the lease requires "100/300" coverage and you don\'t have that and don\'t want to pay more to get it, financing is a better option.',
				'score': 1
			}
		}
	}
};

populateQuiz(questionId);

function populateQuiz(id) {

	var Id = questionId + 1

	$('span.questionId').text(Id + '. ');
	$('span.question').text(leaseVsBuy[id].question);
	$('span.answer1').text(leaseVsBuy[id].answers['0'].answer);
	$('span.answer2').text(leaseVsBuy[id].answers['1'].answer);
	$('span.answer3').text(leaseVsBuy[id].answers['2'].answer);

}

//Clicked input 
$('input.answer').on('click', function () {

	//Store AnswerId
	var answerId = $(this).data('id');
	leaseVsBuy[questionId].selection = answerId;

	//Show answer description
	$('.quizContainer .description').text(leaseVsBuy[questionId].answers[answerId].description);

	//Show next button
	$('button.next').show();

});

//Allow user click on span
$('input.answer ~ span').on('click', function () {

	$(this).prev().click();

});

// Clicked next button
$('button.next').on('click', function () {

	if (questionId < 8) {

		//Reset selectedInput
		$("input.answer:checked").prop("checked", false);
		//Clear answer description
		$('.quizContainer .description').text('');
		//Increment questionId
		questionId++
		//Load next question
		populateQuiz(questionId);
		//Hide next question button
		$(this).hide();


	} else if (questionId == 8) {

		$(this).text('Show Quiz Results');
		//Reset selectedInput
		$("input.answer:checked").prop("checked", false);
		//Clear answer description
		$('.quizContainer .description').text('');
		//Increment questionId
		questionId++
		//Load next question
		populateQuiz(questionId);
		//Hide next question button
		$(this).hide();

	} else {

		//Clearout description
		$('.quizContainer .description').text('');
		
		//Hide next button
		$('button.next').hide();

		//Calculate score
		for (var i = 0; i <= 9; i++) {

			var selection = leaseVsBuy[i].selection;

			var currentScore = leaseVsBuy[i].answers[selection].score;

			var totalScore = leaseVsBuy.totalScore;
			
			var newScore = totalScore + currentScore;

			leaseVsBuy.totalScore = newScore;

		}
		
		//Display score
		$('.quizContainer .results').text('Your Score was ' + leaseVsBuy.totalScore);

		//Display message
		if (leaseVsBuy.totalScore >= 24) {

			$('.quizContainer .results').append('<br><hr>Leasing is a good option for you.');

		} else if (leaseVsBuy.totalScore >= 15 && leaseVsBuy.totalScore <= 23) {

			$('.quizContainer .results').append('<br><hr>Leasing and buying are both reasonable options.');

		} else {
			$('.quizContainer .results').append('<br><hr>Buying is a better option.');

		}

	}

});
