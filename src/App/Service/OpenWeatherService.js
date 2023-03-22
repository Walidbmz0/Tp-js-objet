const baseURI = "https://api.openweathermap.org/data/2.5/";

/**
 * Service OpenWeather
 */
export class OpenWeatherService {
  appid;
  units;
  lang;

  constructor(appid, units, lang) {
    this.appid = appid;
    this.units = units;
    this.lang = lang;
  }

  /**
   * Récupération des données météo actuelles
   *
   * @param lat {number} Latitude
   * @param lon {number} Longitude
   *
   * @returns {Promise<Response>}
   */
  getCurrentConditions(lat, lon) {
    let url = this.getUrl("onecall", ["daily", "minutely", "hourly", "alerts"]);

    url += `&lat=${lat}&lon=${lon}`;

    // Version longue
    // const promiseResult = fetch( url ); // On obtient un objet Promise dans lequel on pourra récuper une réponse
    // Une Promise permet d'attendre une réponse plus tard et de lancer une fonction seulement à ce moment là
    // const promiseResult = fetch( url ); // On obtient un objet Promise dans lequel on pourra récuper une réponse

    // De la fonction anonyme vers la fonction fléchée
    // promiseResult.then( function( r ) { return r.json() } );
    // promiseResult.then( ( r ) => { return r.json() } );
    // promiseResult.then( r => { return r.json() } );

    // Promise.then() contient la fonction à exécuter
    // La promise de fetch reçoit une réponse HTTP qui contient les données demandées
    // Il reste encore à extraire ses données dans un format donné
    // Response.json() convertit ces données au format JSON
    // La conversion pouvant être d'une durée variable, Response.json() renvoie une Promise
    // qui contiendra les données finales
    // promiseResult.then( r => r.json() );

    // C'est cette dernière promise qui doit être transmise à App
    // return promiseResult;

    return fetch(url).then((response) => response.json());
  }

  /**
   * Récupération des données météo actuelles et construction d'une URL selon les paramètres
   *
   * @param APIType {string} Nom du service
   * @param excludes {Array} Détails à exclure du résultat
   *
   * @returns {string}
   */
  getUrl(APIType, excludes = []) {
    let url = `${baseURI + APIType}?appid=${this.appid}&units=${
      this.units
    }&lang=${this.lang}`;

    if (excludes.length > 0) {
      url += `&exclude=${excludes.join(",")}`;
    }

    return url;
  }
}
