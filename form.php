<form class="form-inline" method="post" action="/traitement.php">
    <div class="formTitleDiv">
    <h1 class="formTitle">Formulaire de contact</h1>
    </div>

    <fieldset class=humanForm>
        <legend>Vos coordonnées</legend>
        <div class="form-input">
            <label for="contact">Nom et Prénom :</label>
            <input class="custom-input" type="text" name="contact" id="contact" placeholder="Iron Man">
        </div>

        <div class="form-input">
            <label for="company">Société :</label>
            <input class="custom-input" type="text" name="company" id="company" placeholder="Les Avengers">
        </div>

        <div class="form-input">
            <label for="email">Email :</label>
            <input class="custom-input" type="email" name="email" id="email" placeholder="iron_man@avengers.com" required /> <!-- required permet d'obliger le remplissage d'un champ -->
        </div>

        <div class="form-input">
            <label for="phone">Téléphone :</label>
            <input class="custom-input" type="phone" name="phone" id="phone" placeholder="078 654 376">
        </div>

    </fieldset>

    <fieldset class=humanForm>
        <legend>Votre Message</legend>

        <div class="form-input">
            <label for="message"></label>
            <textarea class="custom-input" name="message" id="message" cols="30" rows="5" placeholder="Ajoutez votre message"></textarea>
        </div>

    </fieldset>


    <fieldset class="hulkForm">
       <legend>Votre mission (s'affiche en thème HULK)</legend>
 
        <div class="form-input">
            <label>Vous voudriez ?</label>
            <div class="radio-container">
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="track" id="track" />
                    <label class="radio-label" for="track"><strong>Retrouver et traquer</strong> un ennemi</label>
                </div>
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="fight" id="fight" />
                    <label class="radio-label" for="fight"><strong>Casser la g#@ul€</strong> à un ennemi</label>
                </div>
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="remove" id="remove" />
                    <label class="radio-label" for="remove"><strong>Supprimer définitivement </strong> un ennemi</label>
                </div>
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="autre" id="autre" />
                    <label class="radio-label" for="autre">Autre ?!</label>
                </div>
            </div>
        </div>
 
        <div class="form-input">
           <label for="precisions"></label>
           <textarea class="custom-input" name="precisions" id="precisions" cols="40" rows="4" placeholder='Si "Autre", veuillez préciser :'></textarea>
        </div>
   </fieldset>

   <button type="submit">Send</button>


</form>