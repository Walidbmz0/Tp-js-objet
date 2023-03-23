export class Form {
  /* On déclare les éléments du DOM */
  elDivForm;
  elForm;

  labelTitle;
  elInputTitle;

  labelDescription;
  elInputDescription;

  labelLat;
  elInputLat;

  labelLng;
  elInputLng;

  labelStartDate;
  elInputStartDate;

  labelFinishDate;
  elInputFinishDate;

  /**
   * Crée le formulaire
   */
  initForm() {
    // Sert à crée la div
    this.elDivForm = document.createElement("div");
    this.elDivForm.id = "form";

    this.elForm = document.createElement("form");
    this.elForm.noValidate = true;
    this.elForm.setAttribute("method", "get");
    this.elForm.className = "d-flex justify-content-center flex-wrap";

    // Permet de crée le label
    this.labelTitle = document.createElement("label");
    this.labelTitle.innerHTML = "Titre de l'evenement";
    this.labelTitle.className = "form-label";
    this.elForm.append(this.labelTitle);
    // Crée l'input
    this.elInputTitle = document.createElement("input");
    this.elInputTitle.setAttribute("type", "text");
    this.elInputTitle.setAttribute("id", "title");
    this.elInputTitle.setAttribute("placeholder", "La fête de l'ours");
    this.elInputTitle.className = "form-control w-75";
    // Ajoute l'input au formulaire
    this.elForm.append(this.elInputTitle);

    // Crée le label
    this.labelDescription = document.createElement("label");
    this.labelDescription.innerHTML = "Description de l'evenement";
    this.labelDescription.className = "form-label";
    this.elForm.append(this.labelDescription);
    // Crée l'input
    this.elInputDescription = document.createElement("textarea");
    this.elInputDescription.setAttribute("id", "description");
    this.elInputDescription.setAttribute("rows", 10);
    this.elInputDescription.setAttribute("cols", 30);
    this.elInputDescription.setAttribute(
      "placeholder",
      "La fête de l’Ours, une légende ancestrale et une pure tradition catalane"
    );
    this.elInputDescription.className = "form-control w-75";
    // Ajoute l'input au formulaire
    this.elForm.append(this.elInputDescription);

    // Crée le label
    this.labelLat = document.createElement("label");
    this.labelLat.innerHTML = "Latitude";
    this.labelLat.className = "form-label";
    this.elForm.append(this.labelLat);
    // Crée l'input
    this.elInputLat = document.createElement("input");
    this.elInputLat.setAttribute("type", "number");
    this.elInputLat.setAttribute("id", "lat");
    this.elInputLat.setAttribute("placeholder", "lat : 46.5975118");
    this.elInputLat.className = "form-control w-50 m-2";
    // L'ajoute au formulaire
    this.elForm.append(this.elInputLat);

    // Crée l'input
    this.elInputLng = document.createElement("input");
    this.elInputLng.setAttribute("type", "number");
    this.elInputLng.setAttribute("id", "lng");
    this.elInputLng.setAttribute("placeholder", "lng : 6.0935318");
    this.elInputLng.className = "form-control w-50 m-2";
    // Crée le label
    this.labelLng = document.createElement("label");
    this.labelLng.innerHTML = "Longitude";
    this.labelLng.className = "form-label";
    this.elForm.append(this.labelLng);
    // L'ajoute au formulaire
    this.elForm.append(this.elInputLng);

    // Crée le label
    this.labelStartDate = document.createElement("label");
    this.labelStartDate.innerHTML = "Date de début";
    this.labelStartDate.className = "form-label";
    this.elForm.append(this.labelStartDate);
    // Crée l'input
    this.elInputStartDate = document.createElement("input");
    this.elInputStartDate.setAttribute("type", "datetime-local");
    this.elInputStartDate.setAttribute("id", "dateDebut");
    this.elInputStartDate.className = "form-control w-75 m-2";
    // L'ajoute au formulaire
    this.elForm.append(this.elInputStartDate);

    // Crée le label
    this.labelFinishDate = document.createElement("label");
    this.labelFinishDate.innerHTML = "Date de fin";
    this.labelFinishDate.className = "form-label";
    this.elForm.append(this.labelFinishDate);
    // Crée l'input
    this.elInputFinishDate = document.createElement("input");
    this.elInputFinishDate.setAttribute("type", "datetime-local");
    this.elInputFinishDate.setAttribute("id", "dateFin");
    this.elInputFinishDate.className = "form-control w-75 m-2";
    // L'ajoute au formulaire
    this.elForm.append(this.elInputFinishDate);

    this.elDivSubmit = document.createElement("div");
    // Crée le bouton
    this.elSubmit = document.createElement("input");
    this.elSubmit.setAttribute("type", "submit");
    this.elSubmit.setAttribute("id", "submit");
    this.elSubmit.setAttribute("value", "Submit");
    this.elSubmit.className = "btn btn-outline-success";

    this.elDivSubmit.appendChild(this.elSubmit);

    this.elForm.append(this.elSubmit);
    this.elDivForm.append(this.elForm);
    document.body.append(this.elDivForm);
  }
}
