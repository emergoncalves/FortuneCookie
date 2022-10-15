import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Image, Text} from "react-native"


function App(){

  const [image, setImage] = useState(require('./src/images/biscoito.png'));
  const [quote, setQuote] = useState('');

  const quotes = [
    "A vida é feita de escolhas, faça a sua e seja feliz.",
    "Releva, porque o que não faz bem pra mente o tempo leva!",
    "As crises não afastam os amigos. Apenas selecionam.",
    "Queira o bem. Faça o bem. O resto vem.",
    "Faz bem ser o bem de alguém.",
    "É em meio a dificuldade que se encontra a oportunidade",
    "O êxito é ir de frustração a frustração sem perder a animação",
    "Mesmo que algo pareça difícil, nunca desista antes de tentar",
    "Você é o único que entende as suas dificuldades, por isso motive se a prosseguir",
    "Não é uma vida ruim, é apenas um dia ruim, lembre-se disso",
    "Cada dificuldade ultrapassada te faz mais forte",
    "O êxito é a somatória dos pequenos esforços repetidos diariamente",
    "Não compense na ira o que lhe falta na razão.",
    "A vida trará coisas boas se tiveres paciência.",
    "Não ser amado é falta de sorte, mas não amar é a própria infelicidade.",
    "A perseverança é a mãe da boa sorte.",
    "Não deixe que seus erros definam quem você é.",
    "Use protetor solar",
    "Beba muita água",
    "Nunca frite ovo pelado(a)",
    "Não espere a segunda-feira para começar algo.",
    "Não fale nada quando estiver com muita raiva e não combine nada quando estiver muito alegre.",
    "Nunca compare sua vida com a de outras pessoas.",
    "Não viva somente do que faz sentido. Viva do que te faz feliz.",
    "Bobeira é não viver a realidade.",
    "Sempre faça backup.",
    "Nunca ignore sua intuição."

  ]

  function generateQuote(){
    let quoteRandom = Math.floor(Math.random() * quotes.length); 
    setQuote('"' + quotes[quoteRandom] + '"');
    setImage(require('./src/images/biscoitoAberto.png'))
  }

  function reset(){
    setQuote("");
    setImage(require('./src/images/biscoito.png'))
  }

  return(
    <View style={styles.container}>
      <Image source={image} style={styles.image}></Image>
      <Text style={styles.quote}>{quote}</Text>
      
      <TouchableOpacity style={styles.buttonArea} onPress={generateQuote}>
      { quote.length === 0 ?
          <View style={styles.button}>
            <Text style={styles.buttonText}>Abrir biscoito</Text>
          </View>
        : ''
      }
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonArea} onPress={reset}>
      { quote.length != 0 ?
        <View style={[styles.button, {backgroundColor: '#d99b53'}]}>
          <Text style={[styles.buttonText, {color: '#866052'}]}>Novo biscoito</Text>
        </View>
        : ''
      }
      </TouchableOpacity>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ebdccf',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    maxWidth: 250,
    maxHeight: 250
  },
  quote: {
    marginTop: 24,
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '500',
    color: '#866052',
    fontStyle: 'italic'
  },
  buttonArea: {
    width: 250,
    marginTop: 20
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cc7c1c',
    paddingTop: 20,
    paddingRight: 50,
    paddingBottom: 20,
    paddingLeft: 50,
    borderRadius: 30
  },
  buttonText: {
    color: '#f3d4a1',
    fontSize: 22,
    fontWeight: 'bold'
  }
})

export default App;
