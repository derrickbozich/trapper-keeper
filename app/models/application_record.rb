class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.current_user(current_user)
    @current_user = current_user
  end
end
