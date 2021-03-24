<form class="form-inline" method="post" action="/traitement.php">

    <h1>Formulaire de contact</h1>

    <fieldset class=humanForm>
        <legend>Vos coordonnées</legend>
        <label for="contact">Nom et Prénom :</label>
        <input type="text" name="contact" id="contact" placeholder="Iron Man">

        <label for="company">Société :</label>
        <input type="text" name="company" id="company" placeholder="Les Avengers">

        <label for="email">Email :</label>
        <input type="email" name="email" id="email" placeholder="iron_man@avengers.com" required /> <!-- required permet d'obliger le remplissage d'un champ -->

        <label for="phone">Téléphone :</label>
        <input type="phone" name="phone" id="phone" placeholder="078 654 376">

    </fieldset>

    <fieldset class=humanForm>
        <legend>Votre Message</legend>

        <label for="message"></label>
        <textarea name="message" id="message" cols="30" rows="5" placeholder="Bonjour, ceci est votre message"></textarea>

    </fieldset>


    <fieldset class="hulkForm">
       <legend>Votre mission (s'affiche en thème HULK)</legend>
 
       <p>
           Vous voudriez :

           <input type="radio" name="souhait" value="track" id="track" /> <label for="track"><strong>Retrouver et traquer</strong> un ennemi</label>
           <input type="radio" name="souhait" value="fight" id="fight" /> <label for="fight"><strong>Casser la g#@ul€</strong> à un ennemi</label>
           <input type="radio" name="souhait" value="remove" id="remove" /> <label for="remove"><strong>Supprimer définitivement </strong> un ennemi</label>
           <input type="radio" name="souhait" value="autre" id="autre" /> <label for="autre">Autre ?!</label>
       </p>
 
       <p>
           <label for="precisions">Si "Autre", veuillez préciser :</label>
           <textarea name="precisions" id="precisions" cols="40" rows="4"></textarea>
       </p>
   </fieldset>

   <button type="submit">Send</button>


</form>