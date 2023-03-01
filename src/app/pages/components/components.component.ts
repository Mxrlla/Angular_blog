import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { datafake } from '../../data/datafake';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  @Input()
  componentsImage: string = "https://www.siteware.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/04/investimento-tecnologia-empresas.jpg.webp"
  @Input()
  componentsCover: string = "Tecnologia, que ainda está no ar,foi lançada por programa ligado à Petrobras em 2004. Apesar de ser mais simplese limitado que o ChatGPT, Robô Ed também ..."
  @Input()
  componentsTitle: string = "Investimento em tecnologia nas empresas?"
  private id:string | null = "0"

constructor(
  private route:ActivatedRoute
  ){}

  ngOnInit():void{
    this.route.paramMap.subscribe( value =>
     this.id = (value.get("id"))
     )
  }
  setValuesToComponent(id:string){
    const result = datafake.filter(article => article.id == id)
    console.log(result)
  }
}
