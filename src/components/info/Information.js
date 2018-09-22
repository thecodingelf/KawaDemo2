import React, { Component } from 'react'
import { 
    View,
    ScrollView,
    Linking,
    Text, 
    StyleSheet 
} from 'react-native'
import { Header, CardSection } from '../common'

class Information extends Component {
    render() {
        const { 
            textStyle,
            textBold,
            textAddress,
            listStyle,
            sectionStyle 
        } = styles
        let kawaAddressUrl = 'https://oamk-my.sharepoint.com/:w:/r/personal/o5kala00_students_oamk_fi/_layouts/15/Doc.aspx?sourcedoc=%7BEDA320B9-21AC-40FB-ADB2-18634CB2C958%7D&file=Introduction%20to%20the%20Kawa%20model.docx&action=default&mobileredirect=true&DefaultItemOpen=1'
        return (
            <View>
                <Header
                    headerText={'Info/Help'}
                />
                <ScrollView>
                        <CardSection style={sectionStyle}>
                            <Text style={textStyle}>
                                Alkunäytöllä terapeutti täyttää ensin asiakaan nimen, jonka jälkeen painetaan Enter -painiketta{'\n\n'}
                                <Text style={textBold}>Name</Text> = Terapeutti luo asiakkaan nimen taakse hänen oman tilinsä, johon voidaan tallentaa asiakkaan tuotoksia.{'\n\n'}
                                <Text style={textBold}>Huom.</Text> Ainoastaan terapeutti pääsee omalta laitteeltaan tarkastelemaan asiakkaan kanssa hänen tuotoksiaan, 
                                eikä asiakas pääse näkemään muiden asiakkaiden tuotoksia. Sovellusta tulee käyttää aina terapeutin laitteella.
                            </Text>
                        </CardSection>
                        <CardSection style={sectionStyle}>
                            <Text style={textStyle}>
                                Seuraavaksi näytöllä näkyy kolme valintaruutua:{'\n\n'}
                                <Text style={textBold}>Create my river</Text> = Täältä asiakas pääsee luomaan oman jokensa{'\n\n'}
                                <Text style={textBold}>My rivers</Text> = Täältä löytyvät kunkin asiakkaan nimellä tallennetut tuotokset{'\n\n'}
                                <Text style={textBold}>Help/Info</Text> = täällä käyttäjä voi lukea tarkempaa informaatiota ja ohjeita missä tahansa vaiheessa{'\n\n'}
                                <Text style={textBold}>Huom.</Text> Mikäil Kawa-malli ei ole terapeutille entuudestaan tuttu, ole hyvä ja tutustu erilliseen ohjeeseen 
                                <Text style={textAddress} onPress={() => Linking.openURL(kawaAddressUrl)}>”Introduction to Kawa-model”</Text> ennen sovelluksen käyttöä asiakkaan kanssa.
                            </Text>
                        </CardSection>
                        <CardSection style={sectionStyle}>
                            <Text style={textStyle}>
                            <Text style={textBold}> ”Create my river” </Text>{'\n\n'}
                                Kawa-mallin toteutus sisältää <Text style={textBold}>kaksi vaihetta.</Text> Molempiin vaiheisiin on käytettävissä aikaa 30 minuuttia eli yhteensä 60 minuuttia. 
                                Tekemisen voi keskeyttää missä vaiheessa tahansa, tallentamalla tuotos <Text style={textBold}>save</Text> -panikkeesta. 
                                Keskeneräiseen jokeen voidaan palata kirjautumalla uudelleen sisään asiakkaan nimellä ja hakemalla haluttu tuotos kohdasta <Text style={textBold}>My rivers.</Text>{'\n\n'}
                                Käytettävien elementtien määrää ei ole rajoitettu.{'\n\n'}
                                <Text style={textBold}>Vaihe 1:</Text> Näkymänä maisema{'\n\n'}
                                    <Text style={textBold}>•</Text>	Sivusta oikealta napauttamalla, näytölle tulee seuraavat elementit: puu, kivi, kukka sekä kuohunta.{'\n\n'}
                                    <Text style={textBold}>•</Text>	Asiakas liikuttaa sormellaan valitsemiaan elementtejä joen varrelle. {'\n\n'}
                                    <Text style={textBold}>•</Text>	Asiakas määrittelee katkoviivalla jokeen kohdan, missä ajattelee juuri tällä hetkellä elämässään olevan. {'\n\n'}
                                    <Text style={textBold}>•</Text>	Ensimmäisen vaiheen ollessa valmis, tallennus Save -painikkeesta ja siirtyminen toiseen vaiheeseen. {'\n\n'}
                                <Text style={textBold}>Vaihe 2:</Text> Näkymänä joen poikkileikkaus{'\n\n'}
                                    <Text style={textBold}>•</Text>	Jokeen siirrettävät elementit valitaan jälleen sivupalkista napauttamalla ja siirretään sormella haluttuun kohtaan joessa. Elementtejä ovat kivi, kala, ajopuu, simpukka sekä kasvi. {'\n\n'}
                                    <Text style={textBold}>•</Text>	Elementtejä voi suurentaa ja pienentää sormilla venyttämällä ja niiden sisään voi määritellä eri symbolien merkityksiä kirjoittamalla tai nauhoittamalla ääntä {'\n\n'}
                                    <Text style={textBold}>•</Text>	Lopuksi tallennus <Text style={textBold}>Save</Text> -painikkeesta{'\n\n'}
                                (Perehdy myös tarkempiin käyttöohjeisiin, jotka löytyvät opinnäytetyöstämme)

                            </Text>
                        </CardSection>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listStyle: {
        paddingBottom: 10,
    },
    sectionStyle: {
        paddingTop: 15,
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 32,
        justifyContent: 'center',
        marginBottom: 30,
    },
    textStyle: {
        fontSize: 16,
    },
    textBold: {
        fontWeight: 'bold',
        color: '#333'
    },
    textAddress: {
        fontWeight: 'bold',
    },
});

export default Information