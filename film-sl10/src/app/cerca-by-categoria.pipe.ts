import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cerca_by_categoria',
  pure : false
})
export class CercaByCategoriaPipe implements PipeTransform {

    transform(value: Array<any>, filter: string) : Array<any> { {
      return value.filter((value1:any)=>{
        if(!filter || filter.length===0 || filter === "Tutte le Categorie")
          return value1;
        return value1.getFilm().categories.indexOf(filter) !== -1;
      });  
    }
  }

}
