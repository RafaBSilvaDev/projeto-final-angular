import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalJogoObj } from './pagina-crud.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-pagina-crud',
  templateUrl: './pagina-crud.component.html',
  styleUrls: ['./pagina-crud.component.scss']
})
export class PaginaCrudComponent implements OnInit {

  formValue!: FormGroup

  jogoObj: ModalJogoObj = new ModalJogoObj();

  listaJogo: any=[];

  btnUpdateShow:boolean = false;
  btnSaveShow:boolean = true;

  constructor(private FormBuilder: FormBuilder, private api:ApiService) { }



  ngOnInit(): void {
    this.formValue = this.FormBuilder.group({
      nomeJogo: [''],
      tipoJogo: [''],
      dataJogo: ['']
    })
    this.getJogo();
  }

  addJogo() {
    this.jogoObj.nomeJogo = this.formValue.value.nomeJogo;
    this.jogoObj.tipoJogo = this.formValue.value.tipoJogo;
    this.jogoObj.dataJogo = this.formValue.value.dataJogo;


    this.api.postJogo(this.jogoObj).subscribe({
      next: (v) => {console.log(v)},
      error: (e) => {
        alert("Erro")
        console.log(e)},
        complete: () => {
          console.log('complete')
          alert("Jogo Salvo")
          this.getJogo();
          this.formValue.reset();
        }
      }
    )
  }

  fecharModal() {
    this.formValue.reset();
  }

  getJogo() {
    this.api.getJogo(data).subscribe(res =>{
      this.listaJogo = res
    })}


    editarJogo(data:any) {
      this.formValue.controls["nomeJogo"].setValue(data.nomeJogo)
      this.formValue.controls["tipoJogo"].setValue(data.tipoJogo)
      this.formValue.controls["dataJogo"].setValue(data.dataJogo)
      this.jogoObj.id = data.id;
      this.showUpdate();
    }

    updateJogo() {
      this.jogoObj.nomeJogo = this.formValue.value.nomeJogo;
      this.jogoObj.tipoJogo = this.formValue.value.tipoJogo;
      this.jogoObj.dataJogo = this.formValue.value.dataJogo;

      this.api.putJogo(this.jogoObj,this.jogoObj.id).subscribe({next: (v) => {
        console.log(v)
      },
      error: (e) => {
        console.log(e)
        alert("Error")
      },
      complete: () => {
        console.log('Jogo Atualizado')
        alert("Jogo Atualizado")
        this.getJogo();
        this.formValue.reset();
        this.showSave();
        this.jogoObj.id=0;
        this.formValue.reset();
      }
    })
  }


    deletarJogo(data:any) {
      this.api.deletarJogo(data.id).subscribe({
        next: (v) => {console.log(v)},
        error: (e) => {
          alert("Erro")
          console.log(e)},
          complete: () => {
            console.log('Deletado com sucesso!')
            alert("Jogo deletado com sucesso!")
            this.getJogo();

          }
        }
      )
    }

    showSave() {
      this.btnSaveShow=true;
      this.btnUpdateShow=false;
    }

    showUpdate() {
      this.btnSaveShow=false;
      this.btnUpdateShow=true;
    }

}


function data(data: any) {
  throw new Error('Function not implemented.');
}

function subscribe(arg0: { next: (v: any) => void; error: (e: any) => void; complete: () => void; }) {
  throw new Error('Function not implemented.');
}

