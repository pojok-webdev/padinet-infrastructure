import * as CY from '../node_modules/cytoscape/dist/cytoscape'
import { MatDialog } from '@angular/material';
import { ShowNodePropertyDialogComponent } from './app/show-node-property-dialog/show-node-property-dialog.component';
export class PadiCytoscape{
    Cy
    constructor(){
    }
    updateNode(id,data){
        var ele = this.Cy.elements("node[id='"+id+"']");
        ele[0]._private.data = data
        console.log("Update Node invoked",ele[0]._private.data)
    }
    updateEdge(id,data){
        var ele = this.Cy.elements("edge[id='"+id+"']")
        ele.move({
            target:data.target,
            source:data.source
        })
    }
    removeEdge(){
        var collection = this.Cy.elements("edge[id='Core-BALI']");
        this.Cy.remove( collection );    
    }
    removeNode(){
        var collection = this.Cy.elements("node[id='Neo']");
        this.Cy.remove( collection );
    }
    addEdge(obj,callback){
        console.log("Add Edge",obj)
        this.Cy.add(obj),
        callback()
    }
    addCircle(obj,callback){
        this.Cy.add(obj)
        callback()
    }
    getRandomNum(){
        return Math.floor((Math.random() * 100) + 1);
    }
    refresh(){
        this.Cy.layout({
            name:'breadthfirst',/*PRESET,BREADTHFIRST,GRID*/
            rows:1
        })
    }
    initCy(nodes,edges,component_id,callback){
        this.Cy = CY({
            container:component_id,
            elements:{nodes:nodes,edges:edges},
            style:[
                {
                    selector:'node',
                    style:{
                        'background-color':'green',
                        'label':'data(id)'
                    }
                },
                {
                    selector:'edge',
                    style:{
                        'width':'3',
                        'label':'data(id)',
                        'curve-style':'bezier'
                    }
                }
            ],
            styleEnable:true,
            layout:{
                name:'breadthfirst',/*PRESET,BREADTHFIRST,GRID,circle,concentric*/
                rows:2,
                fit:true,
                padding:30,
                strictHierarchy:true,
                directed:true
            },
            zoom:2,
            maxZoom:2,
            minZoom:1e-50,
            pan:{
                x:50,y:50
            }
        })
        callback(this.Cy)
    }
}