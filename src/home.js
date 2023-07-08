
const sliderArea = document.querySelector(".owl-stage");


let sliderList = [];

homeBannarSlider.map((item, index) => {
    sliderList +=`
    <div class="owl-item position-relative" style="background-image: url( ${item.image} ); background-color: #2E3136; background-size: cover; background-position: center;">

        <div class="container position-relative z-index-1 h-100">
            <div class="d-flex flex-column align-items-center justify-content-center h-100">
                <h3 class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation" data-appear-animation="fadeInDownShorter" data-plugin-options="{'minWindowWidth': 0}">
                <span class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
                <img src="img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInLeftShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
                </span>
                ${item.title} <span class="position-relative">NEW <span class="position-absolute left-50pct transform3dx-n50 top-0 mt-4"><img src="img/slides/slide-blue-line.png" class="w-auto appear-animation" data-appear-animation="fadeInLeftShorterPlus" data-appear-animation-delay="1000" data-plugin-options="{'minWindowWidth': 0}" alt="" /></span></span>
                <span class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
                <img src="img/slides/slide-title-border.png" class="w-auto appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="250" data-plugin-options="{'minWindowWidth': 0}" alt="" />
                </span>
                </h3>
            <h1 class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation" data-appear-animation="blurIn" data-appear-animation-delay="500" data-plugin-options="{'minWindowWidth': 0}"> ${item.heading} </h1>
            <p class="text-4 text-color-light font-weight-light opacity-7 mb-0" data-plugin-animated-letters data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}"> ${item.paragraph} </p>
            </div>
        </div>
    </div>
    `;
});


sliderArea.innerHTML= sliderList;







// partner slider dynamic code //

const partnerSlider = document.getElementById("partner-slider");

let partnerSliderList = [];

homePetnerSlider.map((item, index) => {

    partnerSliderList += `
        <div>
        <img class="img-fluid" src=" ${item.photo} " alt="">
        </div>
    `;

} );

partnerSlider.innerHTML = partnerSliderList;







// latest post slider dynamic code //

const latestPostSlider = document.getElementById("latestPostSlider");

let latestPostList = [];

latestPost.map((item,index) => {
    latestPostList += `
    <div class="row">
        <div class="col-lg-6 mb-4 mb-lg-0">
                <article>
                    <div class="row">
                        <div class="col-auto pr-0">
                            <div class="date">
                                <span class="day font-weight-extra-bold"> ${item.innerpost[0].day1} </span>
                                <span class="month text-1"> ${item.innerpost[0].month1} </span>
                            </div>
                        </div>
                        <div class="col pl-1">

                            <h4 class="text-primary text-4"><a class="d-block" href="blog-post.html"> ${item.innerpost[0].title1} </a></h4>

                            <p class="pr-4 mb-0"> ${item.innerpost[0].paragraph1} </p>

                            <a href="https://www.okler.net/" class="read-more text-color-dark font-weight-semibold text-2">read more <i class="fas fa-angle-right position-relative top-1 ml-1"></i></a>

                        </div>
                    </div>
                </article>
            </div>
            <div class="col-lg-6">
            <article>

                <div class="row">

                    <div class="col-auto pr-0">
                        <div class="date">
                            <span class="day font-weight-extra-bold"> ${item.innerpost[1].day2} </span>
                            <span class="month text-1"> ${item.innerpost[1].month2} </span>
                        </div>
                    </div>

                    <div class="col pl-1">
                        <h4 class="text-primary text-4"><a class="d-block" href="blog-post.html"> ${item.innerpost[1].title2} </a></h4>

                        <p class="pr-4 mb-0"> ${item.innerpost[1].paragraph2} </p>

                        <a href="https://www.okler.net/" class="read-more text-color-dark font-weight-semibold text-2">read more <i class="fas fa-angle-right position-relative top-1 ml-1"></i></a>

                    </div>

                </div>

            </article>
        </div>
    </div>
    `;
});

latestPostSlider.innerHTML = latestPostList;






// clients testimonial slider dynamic code //

const clientTestimonialSlider = document.getElementById("clientTestimonialSlider");

let clinetTestimonals = [];

clientTestimonialList.map((item, index) => {
    clinetTestimonals +=`
        <div>
            <div class="col">
                <div class="testimonial testimonial-primary">

                    <blockquote>
                        <p class="mb-0"> ${item.comments} </p>
                    </blockquote>

                    <div class="testimonial-arrow-down">
                    </div>

                    <div class="testimonial-author">
                        
                        <div class="testimonial-author-thumbnail">
                            <img src=" ${item.clientPhoto} " class="rounded-circle" alt="" />
                        </div>

                        <p><strong> ${item.clientName} </strong><span> ${item.position} </span></p>
                    </div>

                </div>
            </div>
        </div>
    `;
});

clientTestimonialSlider.innerHTML = clinetTestimonals;