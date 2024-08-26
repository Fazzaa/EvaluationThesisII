import React from "react";

function Disclaimer() {
    return (
        <div>
            <div className="text-4xl font-bold">Subject-Object Associations Evaluation</div>
            <div>
                <div className="text-2xl mt-4">Descrizione del task</div>
                <p className="mt-2">
                In questa annotazione, ti verrà presentata una frase che include un soggetto, un verbo e un oggetto. 
                Il tuo compito è valutare quanto è probabile che l'oggetto sia associato al soggetto in relazione al verbo dato.
                </p>
                <p className="mt-2">
                <b>Esempio di Frase:</b>
                </p>

                <p className="mt-2">
                "Dato il soggetto GRANDFATHER 'the father of your father or mother' 
                e il verbo LEARN 'impart skills or knowledge to', 
                l'oggetto SCHOOL 'an educational institution' è secondo te:
                </p>

                <p className="mt-2">
                Impossibile | Improbabile | Mediamente probabile | Molto probabile".
                </p>

                <div className="text-2xl mt-4">Istruzione annotazione</div>
                <p className="mt-2">
                Le risposte possibili sono:
                <ul className="mt-2 list-decimal">
                    <li><b>Impossibile</b>: se ritieni che non ci sia alcuna connessione significativa tra il soggetto, il verbo e l'oggetto.</li>
                    <li><b>Improbabile</b>: se ritieni la connessione tra il soggetto, il verbo e l'oggetto sia poco probabile.</li>
                    <li><b>Mediamente probabile</b>: se ritieni la connessione sia possibile, ma non particolarmente forte o chiara.</li>
                    <li><b>Molto probabile</b>: se ritieni che l'oggetto sia chiaramente e fortemente associato al soggetto in relazione al verbo.</li>
                </ul>
                </p>
                <p className="mt-2">
                Se non sei sicuro riguardo a un termine o hai bisogno di chiarimenti, puoi consultare risorse esterne su Internet 
                per ottenere ulteriori informazioni. Assicurati che le tue annotazioni siano basate sulle definizioni fornite 
                e sul loro significato nel contesto della frase.
                </p>
            </div>
        </div>
    );
}

export default Disclaimer;

