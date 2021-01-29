# Angular 6

## Ciclo de vida de Componente

<table width="100%">
  <colgroup><col width="20%">
  <col width="80%">
  </colgroup><tbody><tr>
    <th></th>
    <th>Propósito e Fase</th>
  </tr>
  <tr>
    <td>
      <a href="api/core/AfterContentChecked#ngOnChanges"> ngOnChanges()</a>
    </td>
    <td>
<p>Responder quando Angular (re) define propriedades de entrada vinculadas a dados. O método recebe um <a href="api/core/SimpleChanges">SimpleChanges</a> de valores de propriedade atuais e anteriores.</p>
<p>Chamado antes ngOnInit()re que uma ou mais propriedades de entrada ligadas a dados forem alteradas.</p>
    </td>
  </tr>
  <tr>
    <td>
       <a href="api/core/AfterContentChecked#nngOnInit">ngOnInit()</a>
    </td>
    <td>
<p>Inicialize a diretiva / componente depois que o Angular exibir primeiro as propriedades vinculadas a dados e definir as propriedades de entrada da diretiva / componente.</p>
<p>Chamado <em>z</em>ois do <em>ro</em> ngOnChanges()</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="api/core/AfterContentChecked#ngDoCheck">ngDoCheck()</a>
    </td>
    <td>
<p>Detecte e aja de acordo com mudanças que o Angular não pode ou não detectará sozinho.</p>
<p>Chamado durante cada execução de detecção de mudança, imediatamente depois ngOnChanges()ngOnInit()</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="api/core/AfterContentChecked#ngAfterContentInit">ngAfterContentInit()</a>
    </td>
    <td>
<p>Responda após o conteúdo externo dos projetos Angular na exibição do componente / na exibição em que uma diretiva está.</p>
<p>Chamado <em>z</em>o primeiro ngDoCheck()</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="api/core/AfterContentChecked#ngAfterContentChecked">ngAfterContentChecked()</a>
    </td>
    <td>
<p>Responda após Angular verificar o conteúdo projetado na diretiva / componente.</p>
<p>Chamado após o ngAfterContentInit()s os subseqüentes ngDoCheck()</p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="api/core/AfterViewChecked#ngAfterViewInit">ngAfterViewInit()</a>
    </td>
    <td>
<p>Responder após Angular inicializa as exibições do componente e as exibições filhas / a exibição em que uma diretiva está.</p>
<p>Chamado<em>z</em>o primeiro <a href="api/core/AfterContentChecked#ngAfterContentChecked">ngAfterContentChecked()</a></p>
    </td>
  </tr>
  <tr>
    <td>
      <a href="api/core/AfterViewChecked#ngAfterViewChecked">ngAfterViewChecked()</a>
    </td>
    <td>
<p>Responder depois que o Angular verificar as exibições do componente e as exibições filhas / a exibição em que uma diretiva está.</p>
<p>Chamado após o ngAfterViewInits os subseqüentes <a href="api/core/AfterContentChecked#ngAfterContentChecked">ngAfterContentChecked()</a></p>
    </td>
  </tr>
  <tr>
    <td>
       <a href="api/core/AfterViewChecked#ngngOnDestroy">ngOnDestroy()</a>
    </td>
    <td>
<p>Limpeza logo antes do Angular destruir a diretiva / componente.>Cancelar assinatura Observáveis &#8203;&#8203;e desanexar manipuladores de eventos para evitar vazamentos de memória.</p>
<p>Chamado <em>ntes do</em>ar destruir a diretiva / componente.</p>
    </td>
  </tr>
</tbody></table>