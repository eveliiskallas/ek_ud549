function AddressBook(){  //defineerime AadressBooki
    this.contacts = []; //lisame uue omaduse, mis on massiiv
}

AddressBook.prototype.addContact = function(contact) {
    //kirjutame uue funktsiooni, mis lisab kontakti parameeterina
    this.contacts.push(contact); //ning lüükkab selle parameetri massiivi
}

AddressBook.prototype.getContact = function(index) {
    //funktsioon, mis võtab indeksi ning hiljem tagastab massiivi koos selle indeksiga.
    return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index){
    //kirjutame funtsiooni, mis seob massiivi koos indeksiga
    this.contacts.splice(index, 1);
}

