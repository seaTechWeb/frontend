import React from "react";
import Review from "./Review";

function ReviewSection() {
    const reviews = [
        { name: 'Jeff S.', restaurantName: 'Killer\'s Tacos', message: 'Sales results are picking up now. I think the system is superb. Best I have ever found.', imageLink: '/Images/Xperts Restaurant/Reviews/1.webp' },
        { name: 'Julie P.', restaurantName: 'Sandwich Pizza House', message: "Your customer service has been stellar via chat/email despite no phone option. I was initially concerned your international location could be an issue but you have delivered excellent, prompt and understandable customer service via chat every time.", imageLink: '/Images/Xperts Restaurant/Reviews/2.webp' },
        { name: 'Dominic E.', restaurantName: 'Fiddlers Elbow Fish & Chips', message: 'Fantastic app This is a great app of this online takeaway ordering system. The service has been superb and great customer service. With all the new updates and features, it gives us and more importantly our customers an app thats easy to use. Thanks gloriafood.', imageLink: '/Images/Xperts Restaurant/Reviews/4.webp' }
    ];

    return (
        <div style={{ marginTop: '60px', marginBottom: '60px' }} >
            <p className="text-center" style={{ fontSize: '32px' }} ><b>What restaurants are saying</b></p>
            <p className="text-center">20,732 restaurants can’t be wrong! See more GloriaFood Reviews</p>
            <div className="row">
                {reviews.map((review, index) => (
                    <Review key={index} name={review.name} restaurantName={review.restaurantName} message={review.message} imageLink={review.imageLink} />
                ))}
            </div>
        </div>
    );
}

export default ReviewSection;
