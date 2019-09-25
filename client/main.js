import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import Profiles from '../collections';


Template.func.helpers({
  /* Other helpers */
  profilesCollection: () => {
    console.log(Profiles.find({}));
    return Profiles.find({});
}
});

Template.hello.events({
  
  'submit form': (event) => {
    event.preventDefault();
    const target = event.target;
  const name = target.exampleInput1.value;
  const descr = target.exampleInput2.value;
  const resp = target.exampleInput3.value;
  const fini = target.exampleInput4.value;
  const ffin= target.exampleInput5.value;
  const ubi = target.exampleInput6.value;
  let e = {Nombre:name,Descripcion:descr,Responsable:resp,Fecha_inicio:fini, Fecha_fin:ffin, Ubicacion:ubi};
  Profiles.insert(e);
  }
});

