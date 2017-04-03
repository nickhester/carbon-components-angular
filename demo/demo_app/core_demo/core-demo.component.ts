import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
	selector: "core-demo",
	template: `
	<h1>Core CSS Demo</h1>

	<h2>Primary buttons</h2>

	<button class="btn size-sm">Button</button>
	<button class="btn">Button</button>
	<button class="btn size-lg">Button</button>
	<br>

	<h2>Secondary buttons</h2>

	<button class="btn btn-secondary size-sm">Button</button>
	<button class="btn btn-secondary">Button</button>
	<button class="btn btn-secondary size-lg">Button</button>
	<br>
	<br>

	<h2>Btns group</h2>
	<div aria-label="" class="btn-group clearfix" role="group">
		<button class="btn active">Standard</button>
		<button class="btn">Standard</button>
		<button class="btn " disabled="disabled">Standard</button>
	</div>

	<h2>Btns secondary group</h2>
	<div aria-label="" class="btn-group  btn-secondary  clearfix" role="group">
		<button class="btn active">Standard</button>
		<button class="btn">Standard</button>
		<button class="btn " disabled="disabled">Standard</button>
	</div>

	<br>
	<h2>Forms</h2>
	<br>
	<div class="form-container">
		<label class="label label-top" for="">Field Small</label>
		<input type="text" class="input-field size-sm">
	</div>
	<br>
	<div class="form-container">
		<label class="label  label-top" for="">Field</label>
		<input type="text" class="input-field">
	</div>
	<br>
	<div class="form-container">
		<label class="label label-top" for="">Field Large</label>
		<input type="text" class="input-field size-lg">
	</div>
	<br>

	<div class="form-container">
		<label class="label label-top" for="">Textarea </label>
		<textarea class="input-field"></textarea>
	</div>
	<br>

	<h2>Checkbox</h2>
	<div class="checkbox">
		<label>
			<input type="checkbox" indeterminate="true">
			<span  class="label">test</span>
		</label>
	</div>

	<div class="checkbox">
		<label>
			<input type="checkbox" #interCheckbox >
			<span class="label">Checkbox</span>
		</label>
	</div>


	<div class="checkbox">
		<label>
			<input type="checkbox" class="ng-invalid ng-touched">
			<span class="label">Checkbox</span>
		</label>
	</div>

	<br>

	<h2>Radiobox</h2>
		<div class="radio">
			<label for="r1">
				<input type="radio" name="rg1" id="r1" checked>
					<span class="label">Radio Box 1</span>
			</label>
		</div>
		<div class="radio">
			<label for="r2">
				<input type="radio" name="rg1" id="r2" class="ng-invalid ng-touched">
				<span  class="label">Radio Box 2</span>
			</label>
		</div>
	<br>


	<h2>Switch</h2>

	<div class="switch">
		<label>
			<span class="label">Switch 1 </span>
			<input type="checkbox" checked>
			<span></span>
		</label>
	</div>
	<div class="switch">
		<label>
			<span class="label">Switch 2</span>
			<input type="checkbox">
			<span></span>
		</label>
	</div>




	<h2>Static Table</h2>
	<div>
		<table class="table table-striped">
			<caption class="sr-only">
				Required table caption.
			</caption>
			<thead>
			<tr>
				<th class="text-right">#</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row" class="text-right">1</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row" class="text-right">2</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row" class="text-right">3</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
			</tbody>
		</table>
		<br>
		<br>
		<table class="table has-checkbox table-striped ">
			<caption class="sr-only">
				Required table caption.
			</caption>
			<thead>
			<tr>
				<th >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row" >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
			</tbody>
		</table>


		<br>
		<br>
		<table class="table has-checkbox table-striped size-sm">
			<caption class="sr-only">
				Required table caption.
			</caption>
			<thead>
			<tr>
				<th >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Username</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<th scope="row" >
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Mark</td>
				<td>Otto</td>
				<td>@mdo</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Jacob</td>
				<td>Thornton</td>
				<td>@fat</td>
			</tr>
			<tr>
				<th scope="row">
					<div class="checkbox">
						<label>
							<input type="checkbox">
							<span  class="label"></span>
						</label>
					</div>
				</th>
				<td>Larry</td>
				<td>the Bird</td>
				<td>@twitter</td>
			</tr>
			</tbody>
		</table>


	</div>
	`,
	styleUrls: ["./core-demo.component.scss"]
})
export class CoreDemo {

	@ViewChild('interCheckbox') inCheckbox : ElementRef;

	ngAfterViewInit() {
		this.inCheckbox.nativeElement.indeterminate = true;
	}
}
