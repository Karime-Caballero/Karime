import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {
 
  videos = [
    {
      video: 'Qes1RMK9a50',
      
    },
    {
      video: 'qeqn1d9rplk',
      
    },
    {
      video: 'ROax8vdhuEQ',
      
    },
    {
      video: 't2UW5fF-3Hw',
      
    },
    {
      video: 'pQEAY0nDZ3g',
      
    },
    {
      video: '8Xuzi0VkMRM',
      
    },
    {
      video: '8Xuzi0VkMRM',
      
    },
    {
      video: '8Xuzi0VkMRM',
      
    },
    {
      video: '8Xuzi0VkMRM',
      
    },
    
    
    
  ]
  constructor(){ }
  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }
}
 