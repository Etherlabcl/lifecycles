import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {Template} from 'meteor/templating';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/app-not-found.js';

FlowRouter.route('/', {
  name: 'public',
  action() {
    console.log("en publiiiiicccc")
    BlazeLayout.render("App_body", {content: "public"});
  }
});
