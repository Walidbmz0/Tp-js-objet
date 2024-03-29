export class ClearStorageControl {
  map;
  container;

  onAdd(map) {
    this.map = map;
    this.container = document.createElement("div");
    this.container.classList.add("mapboxgl-ctrl", "mapboxgl-ctrl-group");
    this.container.innerHTML =
      '<button type="button" class="clear"><span>✖</span></button>';

    this.container.children[0].addEventListener(
      "click",
      this.handlerClearStorage.bind(this)
    );

    return this.container;
  }

  onRemove() {
    // Nettoyage
    this.container.removeEventListener(this.handlerClearStorage); // Suppression des écouteurs
    this.container.remove(); // Suppression de l'élément de l'arbre DOM
    this.container = undefined; // Suppression de la référence (pour que Garbage collector vide la mémoire)
    this.map = undefined; // Suppression la référence
  }

  handlerClearStorage() {
    localStorage.clear();
    location.reload();
  }
}
