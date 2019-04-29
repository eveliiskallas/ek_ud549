describe('Address Book', function () {  //kirjeldame uut tsüklit
    var addressBook, //lisame uued objectid, mis tulenevad AddressBook.js'st ja Contact.js'st
        thisContact;

    //kõikidel specidel on väljaspool olevad objektid kättesaadavad

    beforeEach(function () {  // see funktsioon jooksutatakse enne tervet tsükklit
        addressBook = new AddressBook;
        thisContact = new Contact();
    });

    it('should be able to add a contact', function(){  //ja kirjeldame selle speci
        addressBook.addContact(thisContact);
        // et kontakti lisada, läheb vaja ühte kontakti objekti, mis tuleneb Contact.js'st

        expect(addressBook.getContact(0)).toBe(thisContact);
        //testime, kas oodatud kontakt lisati raamatusse või mitte, seega kui me saame esimese kontakti,
        // siis see peab olema sama, mis thisContact
    });

    it('should be able to delete a contact', function() { //kirjeldame speci, mis peaks kontakti kustutama
        addressBook.addContact(thisContact); //lisame kontakti
        addressBook.deleteContact(0);
        //ning kustutame kontakti,
        //mis peaks olema sama nagu thisContact

        expect(addressBook.getContact(0)).not.toBeDefined();
        //testime, kas kontakt ikka kustutati,
        //oodatav vastus on, et kui me võtame esimese kontakti raamatust,
        // siis oodatav vastus oleks not to e defined, sest kustutatud objekt ei tohiks olemas olla
    });
});

describe('Async Address Book', function () { // kirjutame uue tsükli
    var addressBook = new AddressBook(); // lisame objekti

    beforeEach(function (done) {
        addressBook.getInitialContacts(function () { //AddressBook.jsist võetakse esialgsed kontaktid (asünkroonsuse funktsioon)
            done(); //annab teada, kui asyncronous funktsioon on lõpetatud ning siis jooksutab testi
        });
    });
    it('should grab initial contacts', function (done) { //mille sees on uus spec
        expect(addressBook.initialComplete).toBe(true);
        done();  // annab teada, kui asynchronous funktsioon on lõpetatud
        //oletame, et initalComplete on võrdne tõesega
        // üks test ebaõnnestus, sest meie oletus jooksis enne, kui asünkroonsus suutis antud ülesande lõpetada
    });
});