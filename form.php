<form class="form-inline" method="post" action="/traitement.php">
    <div class="formTitleDiv">
    <h1 class="formTitle" id="formTitle">Formulaire de contact</h1>
    </div>

    <fieldset class=humanForm>
        <legend>Vos coordonnées</legend>
        <div class="form-input">
            <label for="form-contact">Nom et Prénom :</label>
            <input class="custom-input" type="text" name="form-contact" id="form-contact" placeholder="Iron Man">
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


    <fieldset class="hulkForm" id="hulkForm">
       <legend>MISSION</legend>
 
        <div class="form-input">
            <label>QUE FAIRE ?</label>
            <div class="radio-container">
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="track" id="track" />
                    <label class="radio-label" for="track"><strong>ATTRAPER</strong> un ennemi</label>
                </div>
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="fight" id="fight" />
                    <label class="radio-label" for="fight"><strong>SMASH</strong> un ennemi</label>
                </div>
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="remove" id="remove" />
                    <label class="radio-label" for="remove"><strong>KILL</strong> un ennemi</label>
                </div>
                <div class="custom-radio">
                    <input type="radio" name="souhait" value="autre" id="autre" />
                    <label class="radio-label" for="autre">T'EN VEUX ENCORE PLUS ?!</label>
                </div>
            </div>
        </div>
 
        <div class="form-input">
           <label for="precisions"></label>
           <textarea class="custom-input" name="precisions" id="precisions" cols="40" rows="4" placeholder='QUEL EST LA MISSION ?'></textarea>
        </div>
   </fieldset>

   <button type="submit" class="btn">Send</button>


</form>