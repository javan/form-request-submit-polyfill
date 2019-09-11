(function(prototype) {
  if (typeof prototype.requestSubmit == "function") return

  prototype.requestSubmit = function(submitter) {
    if (submitter) {
      validateSubmitter(submitter, this)
      submitter.click()
    } else if (submitter = findSubmitter(this)) {
      submitter.click()
    } else {
      submitter = document.createElement("input")
      submitter.type = "submit"
      submitter.hidden = true
      this.appendChild(submitter)
      submitter.click()
      this.removeChild(submitter)
    }
  }

  function validateSubmitter(submitter, form) {
    submitter instanceof HTMLElement || raise(TypeError, "parameter 1 is not of type 'HTMLElement'")
    submitter.type == "submit" || raise(TypeError, "The specified element is not a submit button")
    submitter.form == form || raise(DOMException, "The specified element is not owned by this form element", "NotFoundError")
  }

  function raise(errorConstructor, message, name) {
    throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': " + message + ".", name)
  }

  function findSubmitter(form) {
    var inputs = form.elements
    var index = inputs.length
    while (index--) {
      var input = inputs[index]
      if (input.type == "submit" && !input.disabled) {
        return input
      }
    }
  }
})(HTMLFormElement.prototype);
