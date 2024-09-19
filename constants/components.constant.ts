const COMPONENTS = [
  {
    name: "Accordion",
    description:
      "Accordions are a way to manage content in a collapsible manner. They are useful when you want to toggle between hiding and showing large amount of content.",
    path: "/components/accordion",
    code: `<Accordion>
  <AccordionItem label="First Label">
    <p>Content of the first label</p>
  </AccordionItem>
  <AccordionItem label="Second Label">
    <p>Content of the second label</p>
  </AccordionItem>
  <AccordionItem label="Third Label">
    <p>Content of the third label</p>
  </AccordionItem>
</Accordion>`,
    props: [
      {
        name: "Accordion",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode | React.ReactElement",
            description: "Accordion contents.",
          },
          {
            name: "multiple",
            default: "false",
            type: "boolean",
            description:
              "Whether to allow multiple items to be open at the same time.",
          },
        ],
      },
      {
        name: "AccordionItem",
        props: [
          {
            name: "label",
            default: "undefined",
            type: "React.ReactElement | React.ReactNode",
            description: "Label of the accordion item.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactElement | React.ReactNode",
            description: "Content of the accordion item.",
          },
        ],
      },
    ],
  },
  {
    name: "ActiveLink",
    description:
      "ActiveLink is a special kind of Link that applies an active class when its href is equal to the current URL. You can use it to style the link differently when it is active.",
    path: "/components/active-link",
    code: `<ActiveLink href="/components">Components</ActiveLink>`,
    props: [
      {
        name: "ActiveLink",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode | React.ReactElement",
            description: "Content of the link.",
          },
          {
            name: "href",
            default: "undefined",
            type: "string",
            description:
              "Href of the link. If the href is equal to the current URL, the link will be active.",
          },
          {
            name: "noAbsolute",
            default: "false",
            type: "boolean",
            description:
              "If true, the link will be relative to the current path.",
          },
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Class name of the link.",
          },
          {
            name: "activeClassName",
            default: "undefined",
            type: "string",
            description: "Class name when the link is active.",
          },
          {
            name: "replace",
            default: "false",
            type: "boolean",
            description: "Replace the current entry in the history stack.",
          },
          {
            name: "scroll",
            default: "true",
            type: "boolean",
            description: "Scroll to the top of the page after a navigation.",
          },
          {
            name: "prefetch",
            default: "false",
            type: "boolean",
            description: "Prefetch the linked page in the background.",
          },
        ],
      },
    ],
  },
  {
    name: "Alert",
    description:
      "Alerts are used to communicate a state that affects the entire system. They can be used to inform the user about a successful operation, an error, a warning, or a general information.",
    path: "/components/alert",
    code: `<Alert label="Alert" icon="Sunset" timer>
  "This is an alert
</Alert>`,
    props: [
      {
        name: "AlertProvider",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Content of the provider.",
          },
        ],
      },
      {
        name: "Alert",
        props: [
          {
            name: "key",
            default: "undefined",
            type: "string",
            description: "Unique key for the alert.",
          },
          {
            name: "label",
            default: "undefined",
            type: "string",
            description: "Alert label.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Alert description.",
          },
          {
            name: "icon",
            default: "undefined",
            type: "keyof typeof ICONS",
            description: "Icon of the alert.",
          },
          {
            name: "action",
            default: "undefined",
            type: "ButtonProps",
            description: "Action button.",
          },
          {
            name: "timer",
            default: "undefined",
            type: "boolean",
            description: "Shows timer of the alert.",
          },
        ],
      },
    ],
  },
  {
    name: "Avatar",
    description:
      "Avatars are used to represent people or entities. They can be used to represent a user, a bot, or a system entity. They can also be used to represent a contact in a messaging application.",
    path: "/components/avatar",
    code: `<Avatar src={img} alt="AH" size={160} />`,
    props: [
      {
        name: "Avatar",
        props: [
          {
            name: "src",
            default: "undefined",
            type: "string | StaticImageData",
            description: "Avatar image.",
          },
          {
            name: "alt",
            default: "undefined",
            type: "string",
            description: "Avatar alt text.",
          },
          {
            name: "size",
            default: "undefined",
            type: "number",
            description: "Avatar size in px.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "() => void",
            description: "Avatar onClick event.",
          },
          {
            name: "onContextMenu",
            default: "undefined",
            type: "() => void",
            description: "Avatar onContextMenu event.",
          },
          {
            name: "onMouseEnter",
            default: "undefined",
            type: "() => void",
            description: "Avatar onMouseEnter event.",
          },
          {
            name: "onMouseLeave",
            default: "undefined",
            type: "() => void",
            description: "Avatar onMouseLeave event.",
          },
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Avatar additional classNames.",
          },
        ],
      },
    ],
  },
  {
    name: "Badge",
    description:
      "Badges are used to inform the user about the status of an object or about a new or unread item. They can be used to represent a new message, a new notification, a new feature, a new product, or a new event.",
    path: "/components/badge",
    code: `<Badge variant="primary" size="md" shape="rounded">
  Badge
</Badge>`,
    props: [
      {
        name: "Badge",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "string",
            description: "Badge contents.",
          },
          {
            name: "variant",
            default: "undefined",
            type: "'primary' | 'secondary' | 'tertiary'",
            description: "Badge variant.",
          },
          {
            name: "size",
            default: "undefined",
            type: "'xs' | 'sm' | 'md' | 'lg'",
            description: "Badge size.",
          },
          {
            name: "shape",
            default: "undefined",
            type: "'rounded' | 'pill'",
            description: "Badge shape.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Is badge disabled.",
          },
          {
            name: "icon",
            default: "undefined",
            type: "keyof typeof ICONS",
            description: "Sets badge with icon.",
          },
          {
            name: "iconPosition",
            default: "'left'",
            type: "'left' | 'right'",
            description: "Sets icon position.",
          },
          {
            name: "href",
            default: "undefined",
            type: "string",
            description: "Adds link to the badge.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",
            description: "Adds onClick event to the badge.",
          },
        ],
      },
    ],
  },
  {
    name: "Button",
    description:
      "Buttons are used to perform an action. They can be used to submit a form, to open a dialog, to navigate to a new page, to save a record, or to perform any other action.",
    path: "/components/button",
    code: `<Button variant="primary" size="md">
  Button
</Button>`,
    props: [
      {
        name: "Button",
        props: [
          {
            name: "variant",
            default: "undefined",
            type: "'primary' | 'secondary' | 'tertiary' | 'quaternary'",
            description: "Button variants.",
          },
          {
            name: "size",
            default: "undefined",
            type: "'sm' | 'md' | 'lg'",
            description: "Button sizes.",
          },
          {
            name: "children",
            default: "undefined",
            type: "string",
            description: "Button contents.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "() => void",
            description: "Button onClick event.",
          },
          {
            name: "icon",
            default: "undefined",
            type: "keyof typeof ICONS",
            description: "Adds icon to the button.",
          },
          {
            name: "iconPosition",
            default: "undefined",
            type: "'left' | 'right'",
            description: "Sets icon position.",
          },
          {
            name: "type",
            default: "'button'",
            type: "'button' | 'submit' | 'reset'",
            description: "Sets button type.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Is button disabled.",
          },
          {
            name: "loading",
            default: "undefined",
            type: "boolean",
            description: "Is button loading.",
          },
          {
            name: "href",
            default: "undefined",
            type: "string",
            description: "Adds link to the button.",
          },
          {
            name: "rounded",
            default: "false",
            type: "boolean",
            description: "Rounds the button.",
          },
        ],
      },
    ],
  },
  {
    name: "Calendar",
    description: "Calendars are used to display dates and to select a date.",
    path: "/components/calendar",
    code: `<Calendar
  value={selectedDate}
  setValue={setSelectedDate}
  startOfWeek="Monday"
/>`,
    props: [
      {
        name: "Calendar",
        props: [
          {
            name: "year",
            default: "undefined",
            type: "number",
            description: "Year to display.",
          },
          {
            name: "month",
            default: "undefined",
            type: "number",
            description: "Month to display.",
          },
          {
            name: "value",
            default: "undefined",
            type: "Date | null",
            description: "Date value.",
          },
          {
            name: "setValue",
            default: "undefined",
            type: "(date: Date) => void",
            description: "Date change event.",
          },
          {
            name: "startOfWeek",
            default: "'Sunday'",
            type: "'Sunday' | 'Monday'",
            description: "Start of the week.",
          },
          {
            name: "disabled",
            default: "false",
            type: "boolean",
            description: "Is calendar disabled.",
          },
        ],
      },
    ],
  },
  {
    name: "Card",
    description:
      "Cards are used to display content in a structured and visually appealing way. They can be used to display a variety of content types, such as images, text, links, and buttons.",
    path: "/components/card",
    code: `<Card>This is a card</Card>`,
    props: [
      {
        name: "Card",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "React.ReactElement | React.ReactNode",
            description: "Card contents.",
          },
          {
            name: "href",
            default: "undefined",
            type: "string",
            description: "Adds link to the card.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",
            description: "Card onClick event.",
          },
          {
            name: "onContextMenu",
            default: "undefined",
            type: "(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",
            description: "Card onContextMenu event.",
          },
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Card additional class names.",
          },
        ],
      },
    ],
  },
  {
    name: "Checkbox",
    description:
      "Checkboxes are used to select one or more options from a list of options. They can be used to select multiple options at the same time, or to select a single option from a list of options.",
    path: "/components/checkbox",
    code: `<Checkbox checked={checked} onClick={handleClick}>
  Label
</Checkbox>`,
    props: [
      {
        name: "Checkbox",
        props: [
          {
            name: "checked",
            default: "false",
            type: "boolean",
            description: "Checkbox checked state.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "() => void",
            description: "Checkbox onClick event.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactElement | React.ReactNode",
            description: "Checkbox label.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Checkbox disabled state.",
          },
        ],
      },
    ],
  },
  {
    name: "Command",
    description:
      "Commands are used to display a list of links in a dropdown menu. They can be used to navigate to different pages, to open different modals, or to perform different actions.",
    path: "/components/command",
    code: `<Command open={open} handleClose={handleClose} labels={LABELS} />`,
    props: [
      {
        name: "Command",
        props: [
          {
            name: "open",
            default: "false",
            type: "boolean",
            description: "Command open state.",
          },
          {
            name: "handleClose",
            default: "undefined",
            type: "() => void",
            description: "Command close handler.",
          },
          {
            name: "labels",
            default: "undefined",
            type: "ItemsProps[]",
            description: "Command items.",
          },
        ],
      },
    ],
  },
  {
    name: "Dialog",
    description:
      "Dialogs are used to display a message or to get input from the user. They can be used to display a variety of content types, such as text, images, links, and buttons.",
    path: "/components/dialog",
    code: `<Dialog open={open} handleClose={handleClose}>
  <Card className="flex w-[360px] max-w-[90vw] flex-col gap-6 pt-4">
    <div>
      <p className="mb-2 text-2xl font-500">This is a dialog</p>
      <p className="text-sm text-gray-500">
        Dialog is a modal component that can be used to display a message
        or to get input from the user.
      </p>
    </div>
    <Button variant="secondary" size="md" onClick={handleClose}>
      Close dialog
    </Button>
  </Card>
</Dialog>`,
    props: [
      {
        name: "Dialog",
        props: [
          {
            name: "open",
            default: "false",
            type: "boolean",
            description: "Dialog open state.",
          },
          {
            name: "handleClose",
            default: "undefined",
            type: "() => void",
            description: "Dialog close handler.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactElement",
            description: "Dialog contents.",
          },
        ],
      },
    ],
  },
  {
    name: "Icon",
    description:
      "Icons are used to represent different types of content, such as images, text, links, and buttons. They can be used to display a variety of content types, such as images, text, links, and buttons.",
    path: "/components/icon",
    code: `<Icon name="Sunset" className="size-16" />`,
    props: [
      {
        name: "Icon",
        props: [
          {
            name: "name",
            default: "undefined",
            type: "keyof typeof ICONS",
            description: "Name of the icon to render.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "() => void",
            description: "Icon onClick event.",
          },
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Icon additional classes.",
          },
        ],
      },
    ],
  },
  {
    name: "IconButton",
    description:
      "Icon buttons are used to perform an action. They can be used to submit a form, to open a dialog, to navigate to a new page, to save a record, or to perform any other action.",
    path: "/components/icon-button",
    code: `<IconButton variant="primary" size="md" icon="Sunset" />`,
    props: [
      {
        name: "IconButton",
        props: [
          {
            name: "variant",
            default: "undefined",
            type: "'primary' | 'secondary' | 'tertiary' | 'quaternary'",
            description: "Button variants.",
          },
          {
            name: "size",
            default: "undefined",
            type: "'sm' | 'md' | 'lg'",
            description: "Button sizes.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "() => void",
            description: "Button onClick event.",
          },
          {
            name: "icon",
            default: "undefined",
            type: "keyof typeof ICONS",
            description: "Adds icon to the button.",
          },
          {
            name: "type",
            default: "'button'",
            type: "'button' | 'submit' | 'reset'",
            description: "Sets button type.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Is button disabled.",
          },
          {
            name: "loading",
            default: "undefined",
            type: "boolean",
            description: "Is button loading.",
          },
          {
            name: "href",
            default: "undefined",
            type: "string",
            description: "Adds link to the button.",
          },
        ],
      },
    ],
  },
  {
    name: "Input",
    description:
      "Inputs are used to collect data from the user. They can be used to collect a variety of data types, such as text, numbers, dates, and files. They can also be used to collect data in a variety of formats, such as text, numbers, dates, and files.",
    path: "/components/input",
    code: `<Input
  status="default"
  icon={type === "text" ? "EyeOff" : "Eye"}
  iconPositon="right"
  value={value}
  onChange={handleChange}
  onIconClick={handleTypeChange}
  label="Password"
  placeholder="###"
  helperText="Enter your password."
  type={type}
/>`,
    props: [
      {
        name: "Input",
        props: [
          {
            name: "value",
            default: "undefined",
            type: "string",
            description: "Input value.",
          },
          {
            name: "status",
            default: "'default'",
            type: "'valid' | 'error' | 'default'",
            description: "Input status.",
          },
          {
            name: "onChange",
            default: "undefined",
            type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
            description: "Input onChange event.",
          },
          {
            name: "onBlur",
            default: "undefined",
            type: "(e: React.FocusEvent<HTMLInputElement>) => void",
            description: "Input onBlur event.",
          },
          {
            name: "icon",
            default: "undefined",
            type: "keyof typeof ICONS",
            description: "Adds icon to the input",
          },
          {
            name: "iconPositon",
            default: "undefined",
            type: "'left' | 'right'",
            description: "Icon position",
          },
          {
            name: "onIconClick",
            default: "undefined",
            type: "() => void",
            description: "Icon onClick event.",
          },
          {
            name: "type",
            default: "'text'",
            type: "'text' | 'number' | 'password' | 'email'",
            description: "Input type.",
          },
          {
            name: "label",
            default: "undefined",
            type: "string",
            description: "Input label.",
          },
          {
            name: "placeholder",
            default: "undefined",
            type: "string",
            description: "Input placeholder.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Input disabled.",
          },
          {
            name: "helperText",
            default: "undefined",
            type: "string",
            description: "Input helper text.",
          },
          {
            name: "errorText",
            default: "undefined",
            type: "string",
            description: "Input error text.",
          },
          {
            name: "autoFocus",
            default: "undefined",
            type: "boolean",
            description: "Input auto focus.",
          },
          {
            name: "hideHelper",
            default: "undefined",
            type: "boolean",
            description: "Hides the helper text wrapper.",
          },
        ],
      },
    ],
  },
  {
    name: "Link",
    description:
      "Links are used to navigate between pages or to open a new page in the same window or a new tab. They can be used to navigate to a new page, to open a dialog, to save a record, or to perform any other action.",
    path: "/components/link",
    code: `<Link href="/components">Components</Link>`,
    props: [
      {
        name: "Link",
        props: [
          {
            name: "href",
            default: "undefined",
            type: "string",
            description: "Href of the link.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Content of the link.",
          },
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Class name of the link.",
          },
          {
            name: "tabIndex",
            default: "undefined",
            type: "number",
            description: "Specifies the tab order of the element.",
          },
          {
            name: "target",
            default: "undefined",
            type: "'_blank' | '_self' | '_parent' | '_top'",
            description: "Specifies where to open the linked document.",
          },
          {
            name: "rel",
            default: "undefined",
            type: "string",
            description:
              "Specifies the relationship between the current document and the linked document.",
          },
          {
            name: "replace",
            default: "false",
            type: "boolean",
            description: "Replace the current entry in the history stack.",
          },
          {
            name: "scroll",
            default: "true",
            type: "boolean",
            description: "Scroll to the top of the page after a navigation.",
          },
          {
            name: "prefetch",
            default: "false",
            type: "boolean",
            description: "Prefetch the linked page in the background.",
          },
        ],
      },
    ],
  },
  {
    name: "Loader",
    description:
      "Loaders are used to indicate that a page or a component is loading. They can be used to indicate that a page or a component is loading, to indicate that a process is in progress, or to indicate that a process is complete.",
    path: "/components/loader",
    code: `<Loader size="md" />`,
    props: [
      {
        name: "Loader",
        props: [
          {
            name: "size",
            default: "'md'",
            type: "'sm' | 'md' | 'lg'",
            description: "Loader size.",
          },
        ],
      },
    ],
  },
  {
    name: "Radio",
    description:
      "Radios are used to select one option from a list. They can be used to select one option from a list, to select one option from a group of options, or to select one option from a list of options.",
    path: "/components/radio",
    code: `<Radio
  checked={checked}
  onChange={handleChange}
  id="easy"
  name="difficulty"
  label="Easy mode"
/>
<Radio
  checked={checked}
  onChange={handleChange}
  id="medium"
  name="difficulty"
  label="Medium mode"
/>
<Radio
  checked={checked}
  onChange={handleChange}
  id="hard"
  name="difficulty"
  label="Hard mode"
/>`,
    props: [
      {
        name: "Radio",
        props: [
          {
            name: "checked",
            default: "undefined",
            type: "string",
            description: "Radio value.",
          },
          {
            name: "onChange",
            default: "undefined",
            type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
            description: "Radio onChange event.",
          },
          {
            name: "id",
            default: "undefined",
            type: "string",
            description: "Radio id.",
          },
          {
            name: "name",
            default: "undefined",
            type: "string",
            description: "Radio name.",
          },
          {
            name: "label",
            default: "undefined",
            type: "string",
            description: "Radio label.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Radio disabled.",
          },
        ],
      },
    ],
  },
  {
    name: "Scale",
    description: "ScaleProvider is used to set the scale of the background.",
    path: "/components/scale",
    code: `<ScaleProvider>
  <Button variant="secondary" size="md" onClick={handleClick}>
    Toggle sheet
  </Button>
</ScaleProvider>
    `,
    props: [
      {
        name: "ScaleProvider",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Content of the provider.",
          },
        ],
      },
    ],
  },
  {
    name: "Select",
    description:
      "Selects are used to select one option from a list. They can be used to select one option from a list, to select one option from a group of options, or to select one option from a list of options. They can also be used to select one option from a list of options, to select one option from a group of options, or to select one option from a list of options.",
    path: "/components/select",
    code: `<Select
  status="default"
  value={value}
  onChange={handleChange}
  options={OPTIONS}
  helperText="Select your favorite icon."
  search
/>`,
    props: [
      {
        name: "Select",
        props: [
          {
            name: "options",
            default: "undefined",
            type: "OptionType[]",
            description: "Select options.",
          },
          {
            name: "status",
            default: "undefined",
            type: "'valid' | 'error' | 'default'",
            description: "Select status.",
          },
          {
            name: "onChange",
            default: "undefined",
            type: "(e: string) => void",
            description: "Select onChange event.",
          },
          {
            name: "onBlur",
            default: "undefined",
            type: "(e: React.FocusEvent<HTMLDivElement>) => void",
            description: "Select onBlur event.",
          },
          {
            name: "search",
            default: "undefined",
            type: "boolean",
            description: "If true adds search to the select dropdown.",
          },
          {
            name: "multiple",
            default: "undefined",
            type: "boolean",
            description: "If true sets select as multiple.",
          },
          {
            name: "label",
            default: "undefined",
            type: "string",
            description: "Select label.",
          },

          {
            name: "placeholder",
            default: "undefined",
            type: "string",
            description: "Select placeholder.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Select disabled.",
          },
          {
            name: "multiple",
            default: "undefined",
            type: "boolean",
            description: "If true sets select as multiple.",
          },
          {
            name: "helperText",
            default: "undefined",
            type: "string",
            description: "Select helper text.",
          },
          {
            name: "errorText",
            default: "undefined",
            type: "string",
            description: "Select error text.",
          },
          {
            name: "autoFocus",
            default: "undefined",
            type: "boolean",
            description: "Select autoFocus.",
          },
        ],
      },
    ],
  },
  {
    name: "Separator",
    description:
      "Separators are used to separate content. They can be used to separate content, to separate content, or to separate content. They can also be used to separate content, to separate content, or to separate content.",
    path: "/components/separator",
    code: `<Separator variant="horizontal" className="my-auto" />`,
    props: [
      {
        name: "Separator",
        props: [
          {
            name: "variant",
            default: "undefined",
            type: "'vertical' | 'horizontal'",
            description: "Sets the variant of the separator.",
          },
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Adds additional classes.",
          },
        ],
      },
    ],
  },
  {
    name: "Sheet",
    description:
      "Sheets are used to display additional information. They can be used to display additional information, to display additional information, or to display additional information. They can also be used to display additional information, to display additional information, or to display additional information.",
    path: "/components/sheet",
    code: `<Sheet open={open} handleClose={handleClose}>
  <div className="flex flex-col px-4 py-3">
    <Icon
      name="Close"
      className="size-5 cursor-pointer self-end"
      onClick={handleClose}
    />
    <div className="mt-16 flex w-full flex-col">
      <p className="mb-4 text-2xl font-600">Login</p>
      <Input
        value=""
        placeholder="test"
        label="Username"
        onChange={(_) => _}
        status="valid"
      />
      <Input
        value=""
        placeholder="###"
        label="Password"
        onChange={(_) => _}
        status="valid"
        icon="Eye"
      />
      <Button variant="secondary" size="md">
        Submit
      </Button>
    </div>
    <p className="mx-auto mt-2 text-sm text-gray-700">
      Don&apos;t have account?{" "}
      <span className="font-500 underline">Signup</span>
    </p>
  </div>
</Sheet>`,
    props: [
      {
        name: "Sheet",
        props: [
          {
            name: "open",
            default: "undefined",
            type: "boolean",
            description: "Sheet open state.",
          },
          {
            name: "handleClose",
            default: "undefined",
            type: "() => void",
            description: "Sheet handeClose function event.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Sheet contents.",
          },
          {
            name: "direction",
            default: "'left'",
            type: "'left' | 'right'",
            description: "Sheet direction from which it opens.",
          },
        ],
      },
    ],
  },
  {
    name: "Skeleton",
    description:
      "Skeletons are used to indicate that a page or a component is loading. They can be used to indicate that a page or a component is loading, to indicate that a process is in progress, or to indicate that a process is complete.",
    path: "/components/skeleton",
    code: `<div className="flex w-3/4 flex-wrap gap-1">
  <Skeleton className="h-8 w-full rounded-1" />
  <Skeleton className="h-8 w-full flex-1 rounded-1" />
  <Skeleton className="h-8 w-full flex-[2] rounded-1" />
</div>`,
    props: [
      {
        name: "Skeleton",
        props: [
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Adds additional classes.",
          },
        ],
      },
    ],
  },
  {
    name: "Slider",
    description:
      "Sliders are used to select a value from a range. They can be used to select a value from a range, to select a value from a group of values, or to select a value from a list of values. They can also be used to select a value from a range, to select a value from a group of values, or to select a value from a list of values.",
    path: "/components/slider",
    code: `<Slider value={value} onChange={handleChange} />`,
    props: [
      {
        name: "Slider",
        props: [
          {
            name: "value",
            default: "undefined",
            type: "number",
            description: "Slider value.",
          },
          {
            name: "onChange",
            default: "undefined",
            type: "(event: React.ChangeEvent<HTMLInputElement>) => void",
            description: "Slider change event.",
          },
          {
            name: "min",
            default: "0",
            type: "number",
            description: "Slider minimum value.",
          },
          {
            name: "max",
            default: "100",
            type: "number",
            description: "Slider maximum value.",
          },
          {
            name: "step",
            default: "1",
            type: "number",
            description: "Slider step value.",
          },
          {
            name: "disabled",
            default: "false",
            type: "boolean",
            description: "Disables the slider.",
          },
        ],
      },
    ],
  },
  {
    name: "Switch",
    description:
      "Switches are used to toggle between two states. They can be used to toggle between two states, to toggle between two options, or to toggle between two values. They can also be used to toggle between two states, to toggle between two options, or to toggle between two values.",
    path: "/components/switch",
    code: `<Switch checked={checked} onClick={handleClick}>
  Toggle me!
</Switch>`,
    props: [
      {
        name: "Switch",
        props: [
          {
            name: "checked",
            default: "undefined",
            type: "boolean",
            description: "Switch checked state.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "() => void",
            description: "Switch onClick event.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Switch label.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Switch disabled.",
          },
        ],
      },
    ],
  },
  {
    name: "TableOfContents",
    description:
      "Table of contents are used to navigate a page. They can be used to navigate a page, to navigate a page, or to navigate a page. They can also be used to navigate a page, to navigate a page, or to navigate a page.",
    path: "/components/table-of-contents",
    code: `<TableOfContents heading="This Page" />`,
    props: [
      {
        name: "TableOfContents",
        props: [
          {
            name: "heading",
            default: "undefined",
            type: "string",
            description: "Table of contents heading.",
          },
        ],
      },
    ],
  },
  {
    name: "Tabs",
    description:
      "Tabs are used to navigate between different sections. They can be used to navigate between different sections, to navigate between different sections, or to navigate between different sections. They can also be used to navigate between different sections, to navigate between different sections, or to navigate between different sections.",
    path: "/components/tabs",
    code: `<Tabs labels={["First", "Second", "Third"]} variant="primary">
  <TabItem label="First">
    <></>
  </TabItem>
  <TabItem label="Second">
    <></>
  </TabItem>
  <TabItem label="Third">
    <></>
  </TabItem>
</Tabs>`,
    props: [
      {
        name: "Tabs",
        props: [
          {
            name: "labels",
            default: "[]",
            type: "string[]",
            description: "Tabs labels.",
          },
          {
            name: "variant",
            default: "undefined",
            type: "TabsNavProps['variant']",
            description: "Tabs variant.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Tabs content.",
          },
          {
            name: "className",
            default: "undefined",
            type: "string",
            description: "Adds additional classes.",
          },
        ],
      },
      {
        name: "TabItem",
        props: [
          {
            name: "label",
            default: "undefined",
            type: "string",
            description: "Tab item label.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Tab item content.",
          },
        ],
      },
    ],
  },
  {
    name: "Textarea",
    description:
      "Textareas are used to input large amounts of text. They can be used to input large amounts of text, to input large amounts of text, or to input large amounts of text. They can also be used to input large amounts of text, to input large amounts of text, or to input large amounts of text.",
    path: "/components/textarea",
    code: `<Textarea
  label="Description"
  placeholder="Type something here..."
  helperText="This is a helper text."
  value={value}
  onChange={handleChange}
  status="default"
  rows={7}
/>`,
    props: [
      {
        name: "Textarea",
        props: [
          {
            name: "value",
            default: "undefined",
            type: "string",
            description: "Input value.",
          },
          {
            name: "status",
            default: "'default'",
            type: "'valid' | 'error' | 'default'",
            description: "Input status.",
          },
          {
            name: "onChange",
            default: "undefined",
            type: "(e: React.ChangeEvent<HTMLTextAreaElement>) => void",
            description: "Input onChange event.",
          },
          {
            name: "onBlur",
            default: "undefined",
            type: "(e: React.FocusEvent<HTMLTextAreaElement>) => void",
            description: "Input onBlur event.",
          },
          {
            name: "icon",
            default: "undefined",
            type: "keyof typeof ICONS",
            description: "Adds icon to the input",
          },
          {
            name: "iconPositon",
            default: "undefined",
            type: "'left' | 'right'",
            description: "Icon position",
          },
          {
            name: "onIconClick",
            default: "undefined",
            type: "() => void",
            description: "Icon onClick event.",
          },
          {
            name: "type",
            default: "'text'",
            type: "'text' | 'number' | 'password' | 'email'",
            description: "Input type.",
          },
          {
            name: "label",
            default: "undefined",
            type: "string",
            description: "Input label.",
          },
          {
            name: "placeholder",
            default: "undefined",
            type: "string",
            description: "Input placeholder.",
          },
          {
            name: "disabled",
            default: "undefined",
            type: "boolean",
            description: "Input disabled.",
          },
          {
            name: "helperText",
            default: "undefined",
            type: "string",
            description: "Input helper text.",
          },
          {
            name: "errorText",
            default: "undefined",
            type: "string",
            description: "Input error text.",
          },
          {
            name: "autoFocus",
            default: "undefined",
            type: "boolean",
            description: "Input auto focus.",
          },
          {
            name: "noResize",
            default: "undefined",
            type: "boolean",
            description: "Input no resize.",
          },
          {
            name: "rows",
            default: "3",
            type: "number",
            description: "Input rows.",
          },
          {
            name: "maxLength",
            default: "undefined",
            type: "number",
            description: "Input max length.",
          },
          {
            name: "alignText",
            default: "undefined",
            type: "'left' | 'center' | 'right'",
            description: "Textarea align helper text.",
          },
        ],
      },
    ],
  },
  {
    name: "Theme",
    description:
      "Theme is used to change the application theme. It can be used to change the application theme, to change the application theme, or to change the application theme. It can also be used to change the application theme, to change the application theme, or to change the application theme.",
    path: "/components/theme",
    code: `<Button variant="secondary" size="md" onClick={handleClick}>
  Toggle Theme
</Button>`,
    props: [
      {
        name: "ThemeProvider",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Content.",
          },
        ],
      },
    ],
  },
  {
    name: "TimePicker",
    description: "Time pickers are used to select a time.",
    path: "/components/time-picker",
    code: `<TimePicker value={value} setValue={setValue} />`,
    props: [
      {
        name: "TimePicker",
        props: [
          {
            name: "value",
            default: "undefined",
            type: "{ hour: number; minute: number }",
            description: "Time value.",
          },
          {
            name: "setValue",
            default: "undefined",
            type: "Dispatch<SetStateAction<{ hour: number; minute: number }>>;",
            description: "Time change event.",
          },
          {
            name: "disabled",
            default: "false",
            type: "boolean",
            description: "Toggle disabled state.",
          },
        ],
      },
    ],
  },
  {
    name: "Toast",
    description: "Toasts are used to display small alerts to the user.",
    path: "/components/toast",
    code: `<Toast>
  This is an toast
</Toast>`,
    props: [
      {
        name: "ToastProvider",
        props: [
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Content of the provider.",
          },
        ],
      },
      {
        name: "Toast",
        props: [
          {
            name: "key",
            default: "undefined",
            type: "string",
            description: "Unique key for the toast.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Toast description.",
          },
        ],
      },
    ],
  },
  {
    name: "Toggle",
    description:
      "Toggle is used to change the state of a component. It can be used to change the state of a component, to change the state of a component, or to change the state of a component. It can also be used to change the state of a component, to change the state of a component, or to change the state of a component.",
    path: "/components/toggle",
    code: `<Toggle
  toggled={toggled}
  onClick={handleClick}
  variant="primary"
  icon="Sunset"
  label="Toggle me!"
/>`,
    props: [
      {
        name: "Toggle",
        props: [
          {
            name: "variant",
            default: "undefined",
            type: "'primary' | 'secondary'",
            description: "Toggle variant.",
          },
          {
            name: "toggled",
            default: "false",
            type: "boolean",
            description: "Toggle state.",
          },
          {
            name: "icon",
            default: "undefined",
            type: "string",
            description: "Toggle icon.",
          },
          {
            name: "label",
            default: "undefined",
            type: "string",
            description: "Toggle label.",
          },
          {
            name: "onClick",
            default: "undefined",
            type: "() => void",
            description: "Toggle onClick event.",
          },
          {
            name: "disabled",
            default: "false",
            type: "boolean",
            description: "Toggle disabled state.",
          },
        ],
      },
    ],
  },
  {
    name: "Tooltip",
    description:
      "Tooltips are used to display additional information when hovering over an element. They can be used to display additional information when hovering over an element, to display additional information when hovering over an element, or to display additional information when hovering over an element. They can also be used to display additional information when hovering over an element, to display additional information when hovering over an element, or to display additional information when hovering over an element.",
    path: "/components/tooltip",
    code: `<Tooltip content={<Card>Hovered text.</Card>} direction="top">
  <Button variant="secondary" size="md">
    Hover
  </Button>
</Tooltip>`,
    props: [
      {
        name: "Tooltip",
        props: [
          {
            name: "content",
            default: "undefined",
            type: "React.ReactNode",
            description: "Tooltip content.",
          },
          {
            name: "direction",
            default: "'top'",
            type: "'top' | 'bottom'",
            description: "Tooltip direction.",
          },
          {
            name: "children",
            default: "undefined",
            type: "React.ReactNode",
            description: "Tooltip children.",
          },
          {
            name: "delay",
            default: "undefined",
            type: "number",
            description: "Tooltip delay.",
          },
        ],
      },
    ],
  },
];

export default COMPONENTS;
