# If you have OpenSSL installed, we recommend updating
# the following line to use "https"
source 'http://rubygems.org'

ruby "2.0.0"

gem "middleman"
gem "rack-contrib"
gem "puma"

# Live-reloading plugin
gem "middleman-livereload"

# For faster file watcher updates on Windows:
gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Cross-templating language block fix for Ruby 1.8
platforms :mri_18 do
  gem "ruby18_source_location"
end