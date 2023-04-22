import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args: string) {
    if(args==''){
      return value

    }
    else{
      args=args.toLowerCase();

    }
   return value?.filter((data:any)=>{
      return ( data?.fname?.toLowerCase()?.includes(args) | data?.drName?.toLowerCase()?.includes(args) | data?.profession?.toLowerCase()?.includes(args)  );
    });
  }

}
