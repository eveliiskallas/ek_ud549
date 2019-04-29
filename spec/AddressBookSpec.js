describe('Address Book', function () {  //kirjeldame uut tsükklit
    it('should be able to add a contact', function(){  //ja kirjeldame selle speci
        var addressBook = new AddressBook(), //lisame uued objectid, mis tulenevad AddressBook.js'st ja Contact.js'st
            thisContact = new Contact();

        addressBook.addContact(thisContact);
        // et kontakti lisada, läheb vaja ühte kontakti objekti, mis tuleneb Contact.js'st

        expect(addressBook.getContact(0)).toBe(thisContact);
        //testime, kas oodatud kontakt lisati raamatusse või mitte, seega kui me saame esimese kontakti,
        // siis see peab olema sama, mis thisContact
    });

    it('should be able to delete a contact', function() { //kirjeldame speci, mis peaks kontakti kustutama
        var addressBook = new AddressBook(), //lisame samad objektid
            thisContact = new Contact();

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