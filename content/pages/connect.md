---
title: Contact us
sections:
  - type: HeroSection
    title: Contact us
    text: >-
      Fill out the form below and we will get in touch within 1 business day.
      Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).
    feature:
      type: FormBlock
      action: /.netlify/functions/submission_created
      elementId: contact-form
      submitLabel: Contact
      fields:
        - type: TextFormControl
          label: Name
          placeholder: Your name
          width: 1/2
        - type: TextFormControl
          label: Last name
          placeholder: Your last name
          width: 1/2
        - type: EmailFormControl
          label: Email
          placeholder: Your email
          width: full
        - type: CheckboxFormControl
          label: Sign me up to receive updates
          width: full
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
      subtitle:
        fontWeight: 400
        fontStyle: normal
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
  - elementId: contact-form
    colors: colors-a
    backgroundWidth: full
    title: Contact us
    text: We look forward to hearing from you.
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
        - type: TextFormControl
          name: home-address
          label: Home address
          placeholder: Your home address
          isRequired: true
          width: full
        - type: CheckboxFormControl
          name: updates
          label: Sign me up to receive updates
          width: full
      submitLabel: Send Message
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
