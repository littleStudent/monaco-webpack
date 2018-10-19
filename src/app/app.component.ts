import { Component, ViewChild, OnInit } from '@angular/core';
import * as monaco from 'monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'monaco-webpack-test';
  @ViewChild('container')
  container;

  ngOnInit(): void {
    monaco.editor.defineTheme('theme', {
      base: 'vs-dark',
      inherit: true,
      rules: [{ background: '2f3d47', token: '' }],
      colors: {
        'editor.background': '#2f3d47',
        'editor.lineHighlightBackground': '#d3d3d331'
      }
    });
    monaco.editor.setTheme('theme');
    monaco.editor.create(this.container.nativeElement, {
      value: 'console.log("Hello, world")',
      language: 'javascript'
    });
  }
}
