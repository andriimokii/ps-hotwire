import { Controller } from "@hotwired/stimulus"
import { debounce } from "debounce";

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.log("connected", this.element);
  }
  disconnect() {
    console.log("disconnected...");
  }
  initialize() {
    this.submit = debounce(this.submit.bind(this), 500)
    console.log("initialized");
  }
  submit(event) {
    // debugger
    // event.target.form.requestSubmit();
    this.element.requestSubmit();
  }
}
