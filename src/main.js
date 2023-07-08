


// teamMember code //

const teamMemberArea = document.querySelector(".team-list");

let temaMembers =[];

teamMember.map((item, index) => {

    temaMembers += `
        <div class="col-12 col-sm-6 col-lg-3 isotope-item leadership">
            <span class="thumb-info thumb-info-hide-wrapper-bg mb-4">
                <span class="thumb-info-wrapper">
                <a href="about-me.html">
                    <img src="${item.photo}" class="img-fluid" alt="">
                    <span class="thumb-info-title">
                    <span class="thumb-info-inner">${item.name}</span>
                    <span class="thumb-info-type">${item.position}</span>
                    </span>
                </a>
                </span>
                <span class="thumb-info-caption">
                    <span class="thumb-info-caption-text">${item.about}</span>
                    <span class="thumb-info-social-icons mb-4">

                    <a target="_blank" href="${item.socialMedia.facebook}">
                    <i class="fab fa-facebook-f"></i><span>Facebook</span>
                    </a>

                    <a href="${item.socialMedia.linkedin}">
                    <i class="fab fa-linkedin-in"></i><span>Linkedin</span>
                    </a>

                    <a href="${item.socialMedia.linkedin}">
                    <i class="fab fa-twitter"></i><span>Linkedin</span>
                    </a>
                    </span>
                </span>
            </span>
        </div>

`;

});


teamMemberArea.innerHTML = temaMembers;






















