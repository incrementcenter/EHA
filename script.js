function notificationup() {
    const inputs = document.querySelectorAll(".mainup input");

    // inputs = [input, input, input];
    function emptyInput() {
        let empty = [];
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value === "") {
                empty.push(inputs[i])
            }
        }
        return empty
    }

    let btnup = document.querySelector("input[value = 'Sign Up']");

    btnup.onclick = function () {
        if (document.querySelector("input[type='checkbox']").checked === true) {
            document.querySelector(".notcheck").style.display = "none";
            let empty = emptyInput();
            remove();
            for (let i = 0; i < empty.length; i++) {
                empty[i].nextElementSibling.style.display = "block"
            }
            setTimeout(function () {
                remove();
            }, 5000);
        } else {
            document.querySelector(".notcheck").style.display = "block";
            setTimeout(function () {
                document.querySelector(".notcheck").style.display = "none";
            }, 5000);
        }
    };

    function remove() {
        document.querySelectorAll(".not").forEach(function (divs) {
            divs.style.display = "none"
        })
    }

}

notificationup();