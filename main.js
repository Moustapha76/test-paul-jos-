// Recupération de tous les éléments de notre formulaire

let nom = document.getElementById("nom");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let conf_pass = document.getElementById("conf_pass");

// VISIBILITE DU MOT DE PASSE
let show = document.getElementById("show");
let hide = document.getElementById("hide");
show.addEventListener("click", function () {
    show.style.display = "none";
    hide.style.display = "block";
    pass.type = "text";
})
hide.addEventListener("click", function () {
    hide.style.display = "none";
    show.style.display = "block";
    pass.type = "password";
})
let show2 = document.getElementById("show2");
let hide2 = document.getElementById("hide2");
show2.addEventListener("click", function () {
    show2.style.display = "none";
    hide2.style.display = "block";
    conf_pass.type = "text";
})
hide2.addEventListener("click", function () {
    hide2.style.display = "none";
    show2.style.display = "block";
    conf_pass.type = "password";
})

//-------------- ACCEPTATION DES CONDITIONS GENERALES --------------//

let check = document.querySelector("input[type='checkbox']");
let accept = document.getElementById("accept");

let acceptCond = false;
check.addEventListener('click', function () {
    if (check.value == 'on') {
        accept.innerHTML = "J'accepte les <a href='#'>conditions générales</a>";
        check.value = 'off';
        acceptCond = false;
    }
    else {
        accept.innerHTML = "J'ai accepté les <a href='#'>conditions générales</a>";
        check.value = 'on';
        acceptCond = true;
    }
    console.log(check.value);
})


//--------X------- ACCEPTATION DES CONDITIONS GENERALES -------X------//

//---------------- VERIFICATION DES ELEMENTS ENTRES DANS LE FORMULAIRE ----------------//

let formulaire = document.getElementById("formulaire");
formulaire.addEventListener('submit', function (e) {

    // Règle n°1 : Aucun champ ne doit être vide

    // Information à afficher si au moins un champ est vide
    let erreur = document.getElementById("erreur");

    inputs = Array(nom, mail, pass, conf_pass);
    cpt = 0;
    inputs.forEach(element => {
        if (element.value == "") {
            cpt++;
        }
        if (cpt != 0) {
            erreur.innerHTML = "Tous les champs doivent être rempli";
        }
        else {
            erreur.innerHTML = "";
        }
    });

    // Règle n°2 : vérification du nom
    nomValue = nom.value;
    nomReg = /^[a-zA-Z\s_]*$/i;
    nomReg.test(nomValue) ? nameIsValid = true : nameIsValid = false;

    // // Règle n°3 : vérification de l'email ( model => email@domain.com )
    mailValue = mail.value;
    mailReg = /^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i
    mailReg.test(mailValue) ? mailIsValid = true : mailIsValid = false;

    //Règle n°3 : vérification du mot de passe et sa confirmation
    //le mot de passe doit comporter entre 4 et 6 caractères
    passValue = pass.value;
    passReg = /^[\w#-\*\.\?]{4,6}$/i;
    if (passReg.test(passValue)) {
        passIsValid = true;
        conf_passValue = conf_pass.value;
        if (conf_passValue == passValue) {
            passConfIsValid = true;
        }
        else {
            passConfIsValid = false;
        }
    }
    else {
        passIsValid = false;
    }

    // GESTION DES ERREURS

    let nameErr = document.getElementById("legendName");
    let mailErr = document.getElementById("legendEmail");
    let passErr = document.getElementById("legendPass");
    let confErr = document.getElementById("legendConf");

    if (erreur.innerHTML == "") {
        if (!nameIsValid) {
            nameErr.innerHTML = "Nom invalide";
            nameErr.style.visibility = "visible";
            nameErr.style.color = "red";
            nameErr.previousElementSibling.style.border = "2px solid red";
            nameErr.previousElementSibling.style.color = "red";
        }
        if (!mailIsValid) {
            mailErr.innerHTML = "Email invalide";
            mailErr.style.visibility = "visible";
            mailErr.style.color = "red";
            mailErr.previousElementSibling.style.border = "2px solid red";
            mailErr.previousElementSibling.style.color = "red";
        }
        if (!passIsValid) {
            passErr.innerHTML = "Mot de passe invalide";
            passErr.style.visibility = "visible";
            passErr.style.color = "red";
            passErr.previousElementSibling.style.border = "2px solid red";
            passErr.previousElementSibling.style.color = "red";
        }
        if (!passConfIsValid) {
            confErr.innerHTML = "Confirmation invalide";
            confErr.style.visibility = "visible";
            confErr.style.color = "red";
            confErr.previousElementSibling.style.border = "2px solid red";
            confErr.previousElementSibling.style.color = "red";
        }
        if (nameIsValid) {
            nameErr.style.visibility = "hidden";
            nameErr.previousElementSibling.style.border = "2px solid #c9c4c4";
            nameErr.previousElementSibling.style.color = "black";
        }
        if (mailIsValid) {
            mailErr.style.visibility = "hidden";
            mailErr.previousElementSibling.style.border = "2px solid #c9c4c4";
            mailErr.previousElementSibling.style.color = "black";
        }
        if (passIsValid) {
            passErr.style.visibility = "hidden";
            passErr.previousElementSibling.style.border = "2px solid #c9c4c4";
            passErr.previousElementSibling.style.color = "black";
        }
        if (passConfIsValid) {
            confErr.style.visibility = "hidden";
            confErr.previousElementSibling.style.border = "2px solid #c9c4c4";
            confErr.previousElementSibling.style.color = "black";
        }
    }

    // VERIFIONS SI TOUT EST OK

    if (!nameIsValid || !mailIsValid || !passIsValid || !passConfIsValid || !acceptCond) {
        //si les infos sont tous pas bonnes alors on n'envoie pas le formulaire
        e.preventDefault();
    }
    else {
        //si les infos sont tous bonnes alors on envoie le formulaire
        alert('Inscription réussie !');
    }
})