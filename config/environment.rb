# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# instruct jbuilder to transform the keys in your responses before you send them out

Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true
