import DataSheetBase from './DataSheetBase.js';

export default class DataSheet_localizationSheet extends DataSheetBase {

  constructor(id, updateCb) {
    super(id, updateCb);
    this.requestedKeyPath = "";  // this value can be specified in the React Studio data sheet UI
  }

  makeDefaultItems() {
    // eslint-disable-next-line no-unused-vars
    let key = 1;
    // eslint-disable-next-line no-unused-vars
    let item;
    
    item = {};
    this.items.push(item);
    item['key'] = "_atomstextplaceholdermedium01default_hinttext_119161";
    item['en'] = "Placeholder text (Hint text)";
    
    item = {};
    this.items.push(item);
    item['key'] = "_atomstextlabeldefault_label_901308";
    item['en'] = "Label Title";
    
    item = {};
    this.items.push(item);
    item['key'] = "paybill_paymybill_719494";
    item['en'] = "Pay my Bill";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_carolbiggs_68709";
    item['en'] = "Carol Biggs";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_n1_444659";
    item['en'] = "1";
    
    item = {};
    this.items.push(item);
    item['key'] = "start_basyn_943878";
    item['en'] = "BASYN";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_allinvoices_174842";
    item['en'] = "All invoices";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_date_545883";
    item['en'] = "Date ";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_time_416067";
    item['en'] = "Time ";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_measurement_508317";
    item['en'] = "Measurement";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_orderhash_326442";
    item['en'] = "Order/Hash #";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_accountname_772161";
    item['en'] = "Account Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_amount_66579";
    item['en'] = "Amount";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_type_387046";
    item['en'] = "Type";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_status_851920";
    item['en'] = "Status";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_haulservice_974012";
    item['en'] = "Haul Service";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_unpaid_309692";
    item['en'] = "UNPAID";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_summaryofchargesa_611319";
    item['en'] = "Summary of charges as of May, 6, 2020";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_n250000_842586";
    item['en'] = "$2500.00";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_totalamountdueon_844988";
    item['en'] = "TOTAL AMOUNT DUE ON Date";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_n948am_682366";
    item['en'] = "9:48AM";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_n1000liters_601368";
    item['en'] = "1000 liters";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_may4_505286";
    item['en'] = "May 4, 2020";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_so0002sx_388302";
    item['en'] = "#SO-0002/SX..";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_carolwarner_602725";
    item['en'] = "Carol Warner";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_n2500_374002";
    item['en'] = "$2500";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_yes_81892";
    item['en'] = "YES";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_biofertilizer_282250";
    item['en'] = "Bio-Fertilizer";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice_n1_691144";
    item['en'] = "1";
    
    item = {};
    this.items.push(item);
    item['key'] = "_atomstextplaceholdermedium01default_hinttext_843497";
    item['en'] = "Placeholder text (Hint text)";
    
    item = {};
    this.items.push(item);
    item['key'] = "_atomstextlabeldefault_label_210677";
    item['en'] = "Label Title";
    
    item = {};
    this.items.push(item);
    item['key'] = "paybill2_paymybill_969345";
    item['en'] = "Pay my Bill";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_carolbiggs_381002";
    item['en'] = "Carol Biggs";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_n1_38908";
    item['en'] = "1";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_basyn_538465";
    item['en'] = "BASYN";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_allinvoices_706417";
    item['en'] = "All invoices";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_date_862663";
    item['en'] = "Date ";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_time_295421";
    item['en'] = "Time ";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_measurement_51051";
    item['en'] = "Measurement";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_orderhash_721437";
    item['en'] = "Order/Hash #";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_accountname_79710";
    item['en'] = "Account Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_amount_923994";
    item['en'] = "Amount";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_type_909795";
    item['en'] = "Type";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_status_220477";
    item['en'] = "Status";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_haulservice_212718";
    item['en'] = "Haul Service";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_unpaid_576495";
    item['en'] = "UNPAID";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_summaryofchargesa_16781";
    item['en'] = "Summary of charges as of May, 6, 2020";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n250000_724905";
    item['en'] = "$2500.00";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_totalamountdueon_704826";
    item['en'] = "TOTAL AMOUNT DUE ON Date";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n948am_242632";
    item['en'] = "9:48AM";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n1000liters_534277";
    item['en'] = "1000 liters";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_may4_57438";
    item['en'] = "May 4, 2020";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_so0002sx_413847";
    item['en'] = "#SO-0002/SX..";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_carolwarner_294058";
    item['en'] = "Carol Warner";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n2500_23063";
    item['en'] = "$2500";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_yes_736500";
    item['en'] = "YES";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_biofertilizer_932510";
    item['en'] = "Bio-Fertilizer";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n1_702821";
    item['en'] = "1";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_paybillamount250_730453";
    item['en'] = "Pay Bill amount $2500";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_orderhashso00_20022";
    item['en'] = "Order/Hash # - SO-0002/QmdjeUEbMwDu8oqrKZcLhBpSGSA6NdNu21syWmJwrgdGCV";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_hinttext_342097";
    item['en'] = "Enter amount";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_cancel_339354";
    item['en'] = "Cancel ";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_paythisamount_632720";
    item['en'] = "Pay this amount";
    
    item = {};
    this.items.push(item);
    item['key'] = "_atomstextplaceholdermedium01default_hinttext_839002";
    item['en'] = "Placeholder text (Hint text)";
    
    item = {};
    this.items.push(item);
    item['key'] = "_atomstextlabeldefault_label_732915";
    item['en'] = "  Pay";
    
    item = {};
    this.items.push(item);
    item['key'] = "paybill2_paymybill_889958";
    item['en'] = "Pay my Bill";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_carolbiggs_881229";
    item['en'] = "Carol Biggs";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_n1_376775";
    item['en'] = "1";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_basyn_600360";
    item['en'] = "BASYN";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_allinvoices_382824";
    item['en'] = "All invoices";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_date_1047932";
    item['en'] = "Date ";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_time_577280";
    item['en'] = "Time ";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_measurement_543858";
    item['en'] = "Measurement";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_orderhash_593413";
    item['en'] = "Order/Hash #";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_accountname_928676";
    item['en'] = "Account Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_amount_903842";
    item['en'] = "Amount";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_type_507006";
    item['en'] = "Type";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_status_528971";
    item['en'] = "Status";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_haulservice_911822";
    item['en'] = "Haul Service";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_unpaid_451842";
    item['en'] = "UNPAID";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_summaryofchargesa_539734";
    item['en'] = "Summary of charges as of May, 6, 2020";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n250000_607784";
    item['en'] = "$2500.00";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_totalamountdueon_632500";
    item['en'] = "TOTAL AMOUNT DUE ON Date";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n948am_73709";
    item['en'] = "9:48AM";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n1000liters_216715";
    item['en'] = "1000 liters";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_may4_917492";
    item['en'] = "May 4, 2020";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_so0002sx_569189";
    item['en'] = "#SO-0002/SX..";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_carolwarner_702593";
    item['en'] = "Carol Warner";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n2500_160854";
    item['en'] = "$2500";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_yes_156820";
    item['en'] = "YES";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_biofertilizer_910356";
    item['en'] = "Bio-Fertilizer";
    
    item = {};
    this.items.push(item);
    item['key'] = "cardinvoice2_n1_590845";
    item['en'] = "1";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_paybillamount250_782455";
    item['en'] = "Pay Bill amount $2500";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_hinttext_812774";
    item['en'] = "Liquid Bio-Fertilizer";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_label_550243";
    item['en'] = "Type";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_hinttext2_297045";
    item['en'] = "Not applicable";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_label2_364458";
    item['en'] = " Haul Service";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_hinttext3_987050";
    item['en'] = "Carol Biggs";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_label3_82339";
    item['en'] = "Account Name";
    
    item = {};
    this.items.push(item);
    item['key'] = "card_orderhashso00_526751";
    item['en'] = "Order/Hash # - SO-0002/QmdjeUEbMwDu8oqrKZcLhBpSGSA6NdNu21syWmJwrgdGCV";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_cancel_369312";
    item['en'] = "Cancel ";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_paythisamount_406096";
    item['en'] = "Pay this amount";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_textblock_498183";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_textblock_56631";
    item['en'] = " ";
    
    item = {};
    this.items.push(item);
    item['key'] = "modal_field_132350";
    item['en'] = "Pay this amount";
    
    let storedItems = localStorage.getItem(this.id);
    if (storedItems != null) {
      this.items = JSON.parse(storedItems);
    }
  }

  addItem(item, options) {
    super.addItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  removeItem(item, options) {
    super.removeItem(item, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  replaceItemByRowIndex(idx, newItem, options) {
    super.replaceItemByRowIndex(idx, newItem, options);
    
    localStorage.setItem(this.id, JSON.stringify(this.items));
  }

  getStringsByLanguage = () => {
    let stringsByLang = {};
    for (let row of this.items) {
      const locKey = row.key;
      for (let key in row) {
        if (key === 'key')
          continue;
        let langObj = stringsByLang[key] || {};
        langObj[locKey] = row[key];
        stringsByLang[key] = langObj;
      }
    }
    return stringsByLang;
  }

}
