---
title: Connect
sections:
  - elementId: contact-form
    colors: colors-a
    backgroundWidth: full
    title: I'd love to hear from you
    text: >
      Want to be on the podcast? Want to write a guest post? Have yoga class or
      content requests? Send over an email and share!
    form:
      type: FormBlock
      elementId: contact-form
      action: /.netlify/functions/submission_created
      destination: ''
      fields:
        - type: TextFormControl
          name: name
          label: Name
          placeholder: Your name
          isRequired: true
          width: 1/2
        - type: EmailFormControl
          name: email
          label: Email
          placeholder: Your email
          isRequired: true
          width: 1/2
        - name: Message
          label: Message
          placeholder: Hey Tara...
          isRequired: false
          width: full
          type: TextareaFormControl
      submitLabel: Submit
    feature: null
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
        padding:
          - pt-12
          - pb-12
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        fontWeight: 700
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
    action: /.netlify/functions/submission_created
    type: ContactSection
layout: PageLayout
---
