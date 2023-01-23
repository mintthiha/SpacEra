/*This technique was taken from this youtube video: https://www.youtube.com/watch?v=T33NN_pPeNI&t=193s&ab_channel=BeyondFireship*/ 

/*LEFT SIDE SLIDE ANIMATION */

const observerLeft = new IntersectionObserver((entries) => 
{
	entries.forEach((entry) => 
	{
		console.log(entry)
		if (entry.isIntersecting) 
		{
			entry.target.classList.add('showLeft');
		}
		else 
		{
			entry.target.classList.remove('showLeft');
		}
	});
});

const hiddenElementsLeft = document.querySelectorAll('.transitionLeft');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));

/*RIGHT SIDE SLIDE ANIMATION*/

const observerRight = new IntersectionObserver((entries) => 
{
	entries.forEach((entry) => 
	{
		console.log(entry)
		if (entry.isIntersecting) 
		{
			entry.target.classList.add('showRight');
		}
		else 
		{
			entry.target.classList.remove('showRight');
		}
	});
});

const hiddenElementsRight = document.querySelectorAll('.transitionRight');
hiddenElementsRight.forEach((el) => observerRight.observe(el));