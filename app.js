const btnVerify = document.querySelector("#btn-verify");
const containerVerify = document.querySelector("#container-verify");
const containerGetLink = document.querySelector("#container-getlink");
const bqVerify = document.querySelector("#container-verify blockquote");
const ps = document.querySelectorAll("p");

for (const paragraf of ps) {
    paragraf.classList.add("fs-5");
}

btnVerify.addEventListener("click", function() {
    this.remove();
    bqVerify.remove();
    let time = 10;

    const figcapWait = document.createElement("FIGCAPTION");
    figcapWait.innerText = `Please wait just ${time}s`;
    figcapWait.classList.add("blockquote");
    containerVerify.insertAdjacentElement("beforeend", figcapWait);

    const getLink = setInterval(() => {
        if (time === 0) {
            clearInterval(getLink);
            figcapWait.innerText = "Scoll down to Get Link !";
    
            const btnGetlink = document.createElement("button");
            btnGetlink.innerText = "Get Link";
            btnGetlink.classList.add("btn", "btn-primary", "my-2");

            containerGetLink.insertAdjacentElement("beforeend", btnGetlink);
    
            btnGetlink.addEventListener("click", () => {
                window.location.replace("https://firzaaditiya.my.id/");
            });
        } else {
            figcapWait.innerText = `Please wait just ${time}s`;
            time--;
        }
    }, 1000);
});