import { Pipe, PipeTransform } from '@angular/core';
import { ProdottoModel } from './prodotto-model';

@Pipe({
  name: 'cerca',
  pure: false
})
export class CercaPipe implements PipeTransform {

  transform(value: Array<ProdottoModel>, filter: string) : Array<ProdottoModel> {
    
    return value.filter((value1:ProdottoModel)=>{
      if(!filter || filter.length===0)
        return value1;
      return value1.getFilm().title.toLowerCase().includes(filter.toLowerCase());
    });
  }
}
